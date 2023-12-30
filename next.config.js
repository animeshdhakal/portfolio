/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "upload.wikimedia.org",
                protocol: "https",
                pathname: "**",
            },
            {
                hostname: "cdn.worldvectorlogo.com",
                protocol: "https",
                pathname: "**",
            },
        ],
	},
}

module.exports = nextConfig
