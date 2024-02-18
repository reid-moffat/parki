/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/map',
                permanent: false,
            },
            {
                source: '/profile',
                destination: '/welcome',
                permanent: false,
            }
        ];
    }
};

module.exports = nextConfig;
