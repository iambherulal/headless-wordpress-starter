import BlogItem from "@/components/blog-Item";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Blogs({ posts, data }) {
  // console.log(posts);
  return (
    <section className="my-12 container md:my-20">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{data?.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">{data?.subtitle}</p>
        </div>
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {posts?.map((post) => (
            <BlogItem key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="mx-auto" size={"sm"}>
            <Link href={data?.buttonLink}>{data?.buttonLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
