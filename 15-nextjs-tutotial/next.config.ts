import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  remotePatterns: {
    protocol: "https",
    hostname: "www.course-api.com",
    port: "",
    pathname: "/images/**",
  },
};

export default nextConfig;
