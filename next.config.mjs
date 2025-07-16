/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "www.dummyimage.com",
            }
        ]
    },
};

export default nextConfig;
