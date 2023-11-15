import BlogItem from "@/components/blog-Item";
import { Pagination } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { getPageSEOByUri } from "@/lib/pages";
import { getPaginatedPosts } from "@/lib/posts";
import { pageSEODataStructure } from "@/lib/utils";

export const metadata = async () => {
  const seoData = await getPageSEOByUri("/posts");
  return pageSEODataStructure(seoData);
}

export default async function BlogListing() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });

  return (
    <main className="mx-auto max-w-7xl px-2">
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Resources and insights
        </p>
        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          veritatis voluptates neque itaque repudiandae sint, explicabo
          assumenda quam ratione placeat?
        </p>
        <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search Topics"
          ></input>
          <Button size="sm">Search</Button>
        </div>
      </div>
      {/* posts */}
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <BlogItem key={post.title} post={post} />
        ))}
      </div>
      {pagination && (
        <Pagination
          addCanonical={false}
          currentPage={pagination?.currentPage}
          pagesCount={pagination?.pagesCount}
          basePath="/posts"
        />
      )}
    </main>
  );
}
