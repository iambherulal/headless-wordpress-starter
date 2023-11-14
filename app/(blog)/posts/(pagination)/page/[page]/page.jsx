import ArchiveTemplate from "@/components/archive-template";
import { getPaginatedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

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
