import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      // The requirements now live at the end of the How it works page.
      {
        source: "/requirements",
        destination: "/how-it-works#requirements",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
