import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

export default withSentryConfig(nextConfig, {
  org: "the-students",
  project: "repairshop",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs

  hideSourceMaps: true,

  disableLogger: true,
});
