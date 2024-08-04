/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'secure-content.meetupstatic.com'
            }
        ]
    }
};

export default nextConfig;
