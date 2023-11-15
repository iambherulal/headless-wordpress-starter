import PageTemplate from "@/components/template/page-template";
import { getPageByUri, getPageSEOByUri, pagePathBySlug } from "@/lib/pages";
import { notFound } from "next/navigation";
import "@/app/page.css";
import { pageSEODataStructure } from "@/lib/utils";

export async function generateMetadata({ params }) {
    // read route params
    const slug = pagePathBySlug(params.parentPage);

    const seoData = await getPageSEOByUri(slug);
    return pageSEODataStructure(seoData);
}

export default async function PageIndex({ params }) {
    const { parentPage } = params
    let pageUri = pagePathBySlug(parentPage);
    const { page } = await getPageByUri(pageUri);
    if (!page) notFound();

    return (
        <PageTemplate page={page} />
    );
}