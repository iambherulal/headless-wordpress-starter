import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner({ data }) {
  return (
    <section className="relative w-full container">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 items-center">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 items-start">
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">{data?.subtitle}</p>
            </div>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl" dangerouslySetInnerHTML={{ __html: data?.title }}></h1>
          <p className="mt-8 text-lg text-gray-700">{data?.description}</p>

          <Button asChild className="mt-5" size={"sm"}>
            <Link href={data?.buttonLink}>{data?.buttonLabel} <ChevronRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 justify-center inline-flex">
          <Image
            src={data?.image?.sourceUrl}
            alt={data?.image?.title}
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </section >
  );
}
