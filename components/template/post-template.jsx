import { categoryPathBySlug } from '@/lib/categories';
import { formatDate } from '@/lib/datetime';
import { authorPathByName, authorPathBySlug } from '@/lib/users';
import { Pin, StickyNote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function PostTemplate({ post }) {
  console.log({ post });
  const { title,
    metaTitle,
    description,
    content,
    date,
    author,
    categories,
    modified,
    featuredImage,
    isSticky = false, } = post;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 container">
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 w-full items-center">
        <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <ul className="text-xs font-semibold leading-normal md:text-sm flex gap-3 categories">
            {categories.map((category) => {
              return (
                <li key={category.slug}>
                  <Link href={categoryPathBySlug(category.slug)}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10" dangerouslySetInnerHTML={{
          __html: title,
        }}></h1>
        <ul className='flex items-center gap-6'>
          {author && (
            <li className=''>
              <address className='flex items-center gap-2'>
                {author.avatar && (
                  <Image
                    className="h-full w-10 rounded-lg"
                    src={author.avatar.url}
                    alt={author?.name}
                    width={40}
                    height={40}
                  />
                )}
                By{' '}
                <Link href={authorPathBySlug(author.slug)} rel="author">
                  {author.name}
                </Link>
              </address>
            </li>
          )}
          {date && (
            <li>
              <time pubdate="pubdate" dateTime={date}>
                {formatDate(date)}
              </time>
            </li>
          )}
          {isSticky && (
            <li>
              <Pin aria-label="Sticky Post" />
            </li>
          )}
        </ul>
        {featuredImage && (
          <div className=''>
            <Image
              className="aspect-video w-full rounded-md"
              src={featuredImage.sourceUrl}
              alt={title}
              width={700}
              height={390}
            />
          </div>
        )}
        <div className="w-full max-w-3xl my-10 text-foreground md:text-xl page-content space-y-6" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  )
}
