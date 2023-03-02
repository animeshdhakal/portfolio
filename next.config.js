/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["upload.wikimedia.org", "cdn.worldvectorlogo.com"],
	},
};

module.exports = nextConfig;
