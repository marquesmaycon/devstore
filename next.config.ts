import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{
			hostname: "github.com",
		}],
		qualities: [100]
	},
}

export default nextConfig;
