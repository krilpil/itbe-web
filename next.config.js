/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.lmcdn.ru',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'lacoste.ru',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'static.rendez-vous.ru',
                port: '',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/graphql',
                destination: 'http://localhost:5500/graphql'
            },
        ]
    }
}

module.exports = nextConfig
