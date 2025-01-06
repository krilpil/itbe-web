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
                hostname: 'media.endclothing.com',
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
            {
                protocol: 'https',
                hostname: '*',
                port: '',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/men'
            },
            {
                source: '/graphql',
                destination: 'http://localhost:5500/graphql'
            },
        ]
    }
}

module.exports = nextConfig
