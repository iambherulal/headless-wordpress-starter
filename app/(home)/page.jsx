import FooterCTA from "@/components/cta";
import { QUERY_PAGE_HOME } from "@/data/pages";
import { getPageSEOByUri, getWPPage } from "@/lib/pages";
import { getRecentPosts } from "@/lib/posts";
import Banner from "./components/banner";
import Blogs from "./components/blogs";
import Faqs from "./components/faqs";
import Features from "./components/features";
import { pageSEODataStructure } from "@/lib/utils";

export const metadata = async () => {
  const seoData = await getPageSEOByUri("/home");
  return pageSEODataStructure(seoData);
}

export default async function Home() {
  const { page } = await getWPPage(QUERY_PAGE_HOME);
  const { posts: recentPosts } = await getRecentPosts({
    count: 3,
    queryIncludes: 'index',
  });
  const { banner = {}, features = {}, faqs = {}, resources = {} } = page?.home;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner data={banner} />
      <Features data={features} />
      <Faqs data={faqs} />
      <Blogs posts={recentPosts} data={resources} />
      <FooterCTA />
    </main>
  );
}
