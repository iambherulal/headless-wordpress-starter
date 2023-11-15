export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: process.env.WORDPRESS_FRONT_URL + '/sitemap.xml',
    }
}