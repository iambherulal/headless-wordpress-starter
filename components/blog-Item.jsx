import { categoryPathBySlug } from "@/lib/categories";
import { formatDate } from "@/lib/datetime";
import { postPathBySlug } from "@/lib/posts";
import { authorPathByName } from "@/lib/users";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogItem({ post }) {
  return (
    <div className="border">
      <Link href={postPathBySlug(post.slug)}>
        {post.featuredImage ? (
          <Image
            className="aspect-video w-full rounded-md"
            src={post.featuredImage.mediaDetails.sizes[0].sourceUrl}
            alt={post.title}
            width={300}
            height={225}
          />
        ) : (
          <Image
            className="aspect-video w-full rounded-md"
            src="/images/placeholder-image.webp"
            alt={post.title}
            width={300}
            height={225}
          />
        )}
      </Link>
      <div className="min-h-min p-3">
        <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700 flex gap-2">
          {post?.categories?.map((category) => (
            <Link href={categoryPathBySlug(category.slug)} key={category.id}>#{category.name}</Link>
          ))}
        </p>
        <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
          <Link href={postPathBySlug(post.slug)} dangerouslySetInnerHTML={{ __html: post.title }}></Link>
        </p>
        <div className="mt-2 w-full text-sm leading-normal text-gray-600" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        <div className="mt-4 flex space-x-3 ">
          <Image
            className="h-full w-10 rounded-lg"
            src={post.author.avatar.url}
            alt={post?.author?.name}
            width={40}
            height={40}
          />
          <div>
            <p className="text-sm font-semibold leading-tight text-gray-900">
              <Link href={authorPathByName(post.author.slug)}>{post.author.name}</Link>
            </p>
            <p className="text-sm leading-tight text-gray-600">{formatDate(post.date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
