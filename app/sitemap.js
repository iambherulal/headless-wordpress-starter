import { getAllPages } from "@/lib/pages"
import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
    const { pages } = await getAllPages();
    const { posts } = await getAllPosts();
    const siteUrl = process.env.WORDPRESS_FRONT_URL;
    return [
        ...pages.map((page) => ({
            url: siteUrl + page.uri.replace("/home", ""),
            lastModified: new Date(page.modified),
            changeFrequency: 'weekly',
            priority: 0.8,
        })),
        ...posts.map((post) => ({
            url: siteUrl + post.uri,
            lastModified: new Date(post.modified),
            changeFrequency: 'daily',
            priority: 0.5,
        })),
    ]
}