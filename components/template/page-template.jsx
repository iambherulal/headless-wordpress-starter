import React from 'react'

export default function PageTemplate({ page }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-10 container">
            <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 w-full items-center">
                <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                    <p className="text-xs font-semibold leading-normal md:text-sm">Page</p>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">{page.title}</h1>
                <div className="w-full text-foreground md:text-xl page-content space-y-6" dangerouslySetInnerHTML={{ __html: page?.content }} />
            </div>
        </main>
    )
}
