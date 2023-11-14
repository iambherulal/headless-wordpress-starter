/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'demo.iambherulal.tech',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'secure.gravatar.com',
                port: '',
                pathname: '/avatar/**',
            },
            {
                protocol: 'https',
                hostname: 'placehold.jp',
                port: '',
                pathname: '/**/**',
            },
        ],
    },
}

module.exports = nextConfig
