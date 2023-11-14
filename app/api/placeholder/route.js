import { BackgroundCanvas, BlogPostContent, ProfileContent } from "@/lib/placeholder";
import { ImageResponse } from "@vercel/og";
import { NextApiHandler } from "next";

export async function GET(req, { params }) {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title") : undefined;
    const width = searchParams.has("width")
        ? parseInt(searchParams.get("width"))
        : 1200;
    const height = searchParams.has("height") ? parseInt(searchParams.get("height")) : 630;
    const type = searchParams.has("type") ? searchParams.get("type") : "blog";

    const Content = hasTitle ? (
        <BlogPostContent title={title} type={type} />
    ) : (
        <ProfileContent />
    );

    try {
        return new ImageResponse(<BackgroundCanvas>{Content}</BackgroundCanvas>, {
            width,
            height,
        });
    } catch (e) {
        console.log(e);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}