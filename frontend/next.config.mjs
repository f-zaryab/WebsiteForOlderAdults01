/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'secure-content.meetupstatic.com'
            },
            {
                protocol: 'https',
                hostname: 'secure.meetupstatic.com'
            }
        ]
    }
};

export default nextConfig;
