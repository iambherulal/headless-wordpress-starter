import PageTemplate from "@/components/template/page-template";
import { getPageByUri, getPageSEOByUri, pagePathBySlug } from "@/lib/pages";
import { notFound } from "next/navigation";
import "@/app/page.css";
import { pageSEODataStructure } from "@/lib/utils";

export async function generateMetadata({ params }) {

    const { parentPage, childPage } = params

    let pageUri = pagePathBySlug(parentPage);

    if (Array.isArray(childPage) && childPage.length > 0) {
        pageUri = `${pageUri}/${childPage.join('/')}`;
    }
    const seoData = await getPageSEOByUri(pageUri);
    return pageSEODataStructure(seoData);
}

export default async function PageIndex({ params }) {
    const { parentPage, childPage } = params

    let pageUri = pagePathBySlug(parentPage);

    if (Array.isArray(childPage) && childPage.length > 0) {
        pageUri = `${pageUri}/${childPage.join('/')}`;
    }

    const { page } = await getPageByUri(pageUri);

    if (!page) notFound();

    return (
        <PageTemplate page={page} />
    );
}