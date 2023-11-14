import PostTemplate from '@/components/template/post-template';
import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import "@/app/page.css";

export default async function SinglePost({ params }) {
    const { post } = await getPostBySlug(params?.slug);
    if (!post) notFound();

    return (
        <PostTemplate post={post} />
    )
}
