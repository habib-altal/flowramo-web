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
const credentials = process.env.HF_CREDENTIALS || "network-secret:injected-by-proxy";
const client = createHiggsfieldClient({ credentials });
const fail = (message: string) => {
  console.error(message);
  process.exit(1);
};

// Submit, or rejoin a request that is already running (HF_REQUEST_ID=<id>) so a slow render is never paid for twice.
let requestId = process.env.HF_REQUEST_ID;
if (!requestId) {
  try {
    requestId = (await client.subscribe(model, { input, withPolling: false })).request_id;
  } catch (error) {
    // Never print the error object itself: request configs can carry the Authorization header.
    const name = error instanceof HiggsfieldError ? error.constructor.name : "Error";
    fail(`Request failed (${name}): ${error instanceof Error ? error.message : "unknown error"}`);
  }
  console.log(`Submitted ${requestId} (rejoin with HF_REQUEST_ID=${requestId} if this run stops early)`);
}

// Video renders can sit in Higgsfield's queue for a long time; wait up to an hour.
const DONE = ["completed", "failed", "nsfw", "canceled", "cancelled"];
let result: V2Response | undefined;
for (const deadline = Date.now() + 60 * 60 * 1000; Date.now() < deadline; await new Promise((r) => setTimeout(r, 10_000))) {
  const res = await fetch(`https://api.higgsfield.ai/requests/${requestId}/status`, { headers: { Authorization: `Key ${credentials}` } });
  if (res.status >= 500) continue;
  if (!res.ok) fail(`Status check for ${requestId} answered ${res.status}.`);
  result = (await res.json()) as V2Response;
  if (DONE.includes(result.status)) break;
}
if (!result || !DONE.includes(result.status)) fail(`Request ${requestId} is still running after an hour; rejoin later with HF_REQUEST_ID=${requestId}.`);
result = result!;
const error = (result as V2Response & { error?: string }).error;

const urls = [...(result.images ?? []).map((i) => i.url), ...(result.video?.url ? [result.video.url] : [])];
if (result.status !== "completed" || urls.length === 0) {
  fail(`Request ${result.request_id} ended as "${result.status}"${error ? ` (${error})` : ""} with ${urls.length} file(s); nothing saved.`);
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
