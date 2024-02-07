/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        // The root page automatically routes to the map screen
        return [
            {
                source: '/',
                destination: '/map',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig;
