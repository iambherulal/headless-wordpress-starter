import React from 'react'
import BlogItem from './blog-Item'
import { Pagination } from './pagination'
import Image from 'next/image'

export default function ArchiveTemplate({ posts, pagination, title = "Archive", subtitle, type = "post", author = null }) {
    return (
        <main className="mx-auto max-w-7xl px-2">
            {type === "post" ? (
                <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 items-center">
                    <h1 className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">{title}</h1>
                    <p className="max-w-4xl text-base text-gray-600 md:text-xl">{subtitle}</p>
                </div>
            ) : (
                <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 items-center">
                    <h1 className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">All Posts</h1>
                    <div className="flex items-center space-x-2 justify-center">
                        <Image
                            className="h-full w-10 rounded-lg"
                            src={author.avatar.url}
                            alt={author?.name}
                            width={40}
                            height={40}
                        />
                        <span className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">{author?.name}</span>
                            <span className="text-sm font-medium text-gray-500">@{author?.slug}</span>
                        </span>
                    </div>
                </div>
            )}

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
    )
}
