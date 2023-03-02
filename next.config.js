/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https:",
				host: "**",
			},
		],
	},
};

module.exports = nextConfig;
