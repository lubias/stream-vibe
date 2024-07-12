/** @type {import('next').NextConfig} */
const nextConfig = {
    // next.config.js
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
