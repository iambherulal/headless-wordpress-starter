import PostTemplate from '@/components/template/post-template';
import { getPostBySlug, getPostSEOBySlug, postPathBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import "@/app/page.css";
import { pageSEODataStructure } from '@/lib/utils';

export async function generateMetadata({ params }) {
    const slug = `/${params.slug}`
    const seoData = await getPostSEOBySlug(slug);

    return pageSEODataStructure(seoData, 'post');
}

export default async function SinglePost({ params }) {
    const { post } = await getPostBySlug(params?.slug);
    if (!post) notFound();

    return (
        <PostTemplate post={post} />
    )
}
