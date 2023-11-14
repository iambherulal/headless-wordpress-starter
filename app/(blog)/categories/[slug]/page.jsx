import ArchiveTemplate from "@/components/archive-template";
import { getCategoryBySlug } from "@/lib/categories";
import { getPostsByCategoryId } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function CategoryArchive({ params }) {

    const { category } = await getCategoryBySlug(params?.slug);
    if (!category) notFound();

    const { name, description } = category;

    const { posts, pagination } = await getPostsByCategoryId({
        queryIncludes: 'archive',
        categoryId: category.databaseId,
    });

    const subtitle = description || category.og?.description || `Read ${posts.length} posts from ${name}`

    return (
        <ArchiveTemplate posts={posts} pagination={pagination} title={category?.name} subtitle={subtitle} />
    );
}
