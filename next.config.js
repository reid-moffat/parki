/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        // The root page automatically routes to the profile screen
        return [
            {
                source: '/',
                destination: '/map',
                permanent: false,
            },
        ]
    }
}

module.exports = nextConfig;
