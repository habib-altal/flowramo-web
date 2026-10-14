// Runs one Higgsfield generation and saves every output file next to a JSON record of how it was made.
//
// Usage: npm run higgsfield:generate -- <model> <input.json> <out-prefix>
//   (needs Node 22.21+ for --use-env-proxy, which sends downloads through HTTPS_PROXY when one is set)
//   model       a slug from GET https://api.higgsfield.ai/models (add ?include_schema=true for inputs)
//   input.json  the request body for that model
//   out-prefix  where to write files, e.g. design/higgsfield/night-clinic/v1 → v1-1.png, v1.json
//
// Credentials: HF_CREDENTIALS ("key-id:key-secret") when set. In Claude Code cloud sessions the key is a
// Network Secret instead: the egress proxy replaces the Authorization header, so the SDK only needs a
// placeholder and the real key never reaches this machine. Every successful run is billable.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname } from "node:path";
import { createHiggsfieldClient, HiggsfieldError, type V2Response } from "@higgsfield/client/v2";

const [model, inputPath, outPrefix] = process.argv.slice(2);
if (!model || !inputPath || !outPrefix) {
  console.error("Usage: npm run higgsfield:generate -- <model> <input.json> <out-prefix>");
  process.exit(1);
}

const input = JSON.parse(await readFile(inputPath, "utf8"));
const client = createHiggsfieldClient({
  credentials: process.env.HF_CREDENTIALS || "network-secret:injected-by-proxy",
  maxPollTime: 20 * 60 * 1000,
  pollInterval: 5000,
});

let result: V2Response;
try {
  result = await client.subscribe(model, { input, withPolling: true });
} catch (error) {
  // Never print the error object itself: request configs can carry the Authorization header.
  const name = error instanceof HiggsfieldError ? error.constructor.name : "Error";
  console.error(`Request failed (${name}): ${error instanceof Error ? error.message : "unknown error"}`);
  process.exit(1);
}

const urls = [...(result.images ?? []).map((i) => i.url), ...(result.video?.url ? [result.video.url] : [])];
if (result.status !== "completed" || urls.length === 0) {
  console.error(`Request ${result.request_id} ended as "${result.status}" with ${urls.length} file(s); nothing saved.`);
  process.exit(1);
}

await mkdir(dirname(outPrefix), { recursive: true });
const files: string[] = [];
for (const [i, url] of urls.entries()) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed (${res.status}) for ${url}`);
  const ext = extname(new URL(url).pathname) || ".bin";
  const file = `${outPrefix}-${i + 1}${ext}`;
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  files.push(file);
}

await writeFile(`${outPrefix}.json`, JSON.stringify({ model, input, request_id: result.request_id, created: new Date().toISOString(), urls, files }, null, 2) + "\n");
console.log(`Request ${result.request_id} completed:`);
for (const f of files) console.log(`  ${f}`);
