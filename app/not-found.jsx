import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <div>
        <p className="text-sm font-semibold text-black">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-6 flex items-center gap-x-3">
          <Button asChild variant={"outline"} size={"sm"}>
            <Link href="/">
              <ArrowLeft size={16} className="mr-2" />
              Go to Home
            </Link>
          </Button>
          <Button asChild size={"sm"}>
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
