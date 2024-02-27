/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/profile',
                permanent: false,
            }
        ];
    }
};

module.exports = nextConfig;
