import ArchiveTemplate from "@/components/template/archive-template";
import { getCategoryBySlug } from "@/lib/categories";
import { getPostsByAuthorSlug, getPostsByCategoryId } from "@/lib/posts";
import { getUserByNameSlug, getUserBySlug } from "@/lib/users";
import { notFound } from "next/navigation";

export default async function CategoryArchive({ params }) {
    const { user } = await getUserBySlug(params?.slug);
    if (!user) notFound();

    const { name } = user;

    const { posts, pagination } = await getPostsByAuthorSlug({
        queryIncludes: 'archive',
        slug: user?.slug,
    });

    return (
        <ArchiveTemplate posts={posts} pagination={pagination} title={name} type="author" author={user} />
    );
}
