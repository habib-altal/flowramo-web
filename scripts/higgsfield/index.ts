// Seedance 2.5 text-to-video through the official Higgsfield SDK (v2 client).
// Credentials come from HF_CREDENTIALS ("key-id:key-secret"): .env.local (git-ignored, loaded by
// `npm run higgsfield:example`) or the environment. In Claude Code cloud sessions the key is a Network Secret
// instead and the egress proxy replaces the Authorization header, so a placeholder is enough there.
// Every successful run is a billable generation.
import { createHiggsfieldClient, HiggsfieldError, NotEnoughCreditsError, type V2Response } from "@higgsfield/client/v2";

const MODEL = "bytedance/seedance-2.5/text-to-video";

// Video renders take longer than the SDK's 5-minute default polling window.
const client = createHiggsfieldClient({
  credentials: process.env.HF_CREDENTIALS || "network-secret:injected-by-proxy",
  maxPollTime: 15 * 60 * 1000,
  pollInterval: 5000,
});

let result: V2Response;
try {
  result = await client.subscribe(MODEL, {
    input: {
      prompt: "A cinematic scene at sunset",
      duration: 5,
      resolution: "720p",
      aspect_ratio: "16:9",
    },
    withPolling: true,
  });
} catch (error) {
  // Never print the error object itself: request configs can carry the Authorization header.
  const name = error instanceof HiggsfieldError ? error.constructor.name : "Error";
  console.error(`Request failed (${name}): ${error instanceof Error ? error.message : "unknown error"}`);
  if (error instanceof NotEnoughCreditsError) {
    // The SDK maps every HTTP 403 to NotEnoughCreditsError, including a proxy refusing api.higgsfield.ai.
    console.error("Check the account's API credit balance and that this machine can reach api.higgsfield.ai.");
  }
  process.exit(1);
}

const status: string = result.status;
switch (status) {
  case "completed":
    if (!result.video?.url) {
      console.error(`Request ${result.request_id} completed without a video URL.`);
      process.exit(1);
    }
    console.log(`Video ready: ${result.video.url}`);
    break;
  case "nsfw":
    console.error(`Request ${result.request_id} was rejected by moderation (credits refunded).`);
    process.exit(1);
  case "failed":
    console.error(`Request ${result.request_id} failed (credits refunded).`);
    process.exit(1);
  case "canceled":
  case "cancelled":
    console.error(`Request ${result.request_id} was canceled.`);
    process.exit(1);
  default:
    console.error(`Request ${result.request_id} ended in unexpected status "${status}".`);
    process.exit(1);
}
