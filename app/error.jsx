'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-6">
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Something went wrong!</h1>
            <Button size={"sm"} onClick={
                () => reset()
            }>Try again!</Button>
        </main>
    )
}