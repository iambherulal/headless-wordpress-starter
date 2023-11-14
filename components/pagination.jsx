import { ArrowLeft, ArrowRight, Dot, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MAX_NUM_PAGES = 5;

export function Pagination({ pagesCount, currentPage, basePath, addCanonical = true }) {
    const path = `${basePath}/page/`;

    const hasPreviousPage = pagesCount > 1 && currentPage > 1;
    const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

    let hasPrevDots = false;
    let hasNextDots = false;

    function getPages() {
        let pages = pagesCount;
        let start = 0;
        // If the number of pages exceeds the max
        if (pagesCount > MAX_NUM_PAGES) {
            // Set number of pages to the max
            pages = MAX_NUM_PAGES;
            const half = Math.ceil(MAX_NUM_PAGES / 2);
            const isHead = currentPage <= half;
            const isTail = currentPage > pagesCount - half;
            hasNextDots = !isTail;
            // If the current page is at the head, the start variable remains 0
            if (!isHead) {
                hasPrevDots = true;
                // If the current page is at the tail, the start variable is set to
                // the last chunk. Otherwise the start variable will place the current
                // page at the middle
                start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
            }
        }
        return [...new Array(pages)].map((_, i) => i + 1 + start);
    }

    const pages = getPages();

    return (
        <nav className="flex items-center justify-center my-5 mb-10" role="navigation" aria-label="Pagination Navigation">
            {hasPreviousPage && (
                <Link href={`${path}${currentPage - 1}`} aria-label="Goto Previous Page" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900 flex gap-2">
                    <ArrowLeft className='w-5 h-5' /> Previous
                </Link>
            )}
            <ul className='flex pagination'>
                {hasPrevDots && (
                    <li className="">
                        <MoreHorizontal aria-label={`Navigation to pages 1-${pages[0] - 1} hidden`} />
                    </li>
                )}
                {pages.map((page) => {
                    const active = page === currentPage;
                    return active ? (
                        <li key={page} className='pagination-active'>
                            <span className="" aria-label={`Current Page, Page ${page}`} aria-current="true">
                                {page}
                            </span>
                        </li>
                    ) : (
                        <li key={page}>
                            <Link href={`${path}${page}`} aria-label={`Goto Page ${page}`}>{page}</Link>
                        </li>
                    );
                })}
                {hasNextDots && (
                    <li className="">
                        <MoreHorizontal aria-label={`Navigation to pages ${pages[pages.length - 1] + 1}-${pagesCount} hidden`} />
                    </li>
                )}
            </ul>
            {hasNextPage && (
                <Link href={`${path}${currentPage + 1}`} className="mx-2 text-sm font-semibold text-gray-900 flex gap-2" aria-label="Goto Next Page">
                    Next <ArrowRight className='w-5 h-5' />
                </Link>
            )}
        </nav>
    )
}