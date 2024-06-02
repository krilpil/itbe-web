/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.lmcdn.ru',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
