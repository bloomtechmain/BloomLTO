import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every page is prerendered at build time and nothing revalidates, so the
// prerendered output is served straight from the Worker's static assets.
// Switch to the R2 incremental cache if a page ever needs revalidation.
export default defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
});
