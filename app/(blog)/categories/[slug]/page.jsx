import ArchiveTemplate from "@/components/template/archive-template";
import { getCategoryBySlug } from "@/lib/categories";
import { getPostsByCategoryId } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    // read route params
    const slug = pagePathBySlug(params.slug);

    const seoData = await getPageSEOByUri(slug);
    return pageSEODataStructure(seoData);
}

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
