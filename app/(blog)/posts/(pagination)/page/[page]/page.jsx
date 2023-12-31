import ArchiveTemplate from "@/components/template/archive-template";
import { getPaginatedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    return {
        title: `Page ${params.page}`,
        description: 'All posts from the blog',
    }
}

export default async function BlogPageArchive({ params }) {
    const { page } = params;
    const { posts, pagination } = await getPaginatedPosts({
        queryIncludes: 'archive',
        currentPage: page,
    });

    if (!pagination.currentPage) notFound();

    return (
        <ArchiveTemplate posts={posts} pagination={pagination} title="All Posts" subtitle={`Page ${page}`} />
    );
}
