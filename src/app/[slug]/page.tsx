import { material } from "@/data/readMaterial";
import { notFound } from "next/navigation";
import React from "react";
import { YouTubeEmbed } from "@/components";
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static params for all material slugs
export async function generateStaticParams() {
  return material.map((m) => ({
    slug: m.slug,
  }));
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  // Find the material by slug
  const page = material.find((m) => m.slug === slug);

  // If no page found, return 404
  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12 px-6 sm:px-8 lg:px-16">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {page.title}
          </h1>

        </div>
        <div className="flex gap-6 w-full">
          {/* Content */}
          <div className="prose prose-lg max-w-none w-1/2">
            <div className="text-lg leading-relaxed text-foreground/90 p-12">
              {page.content.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
          <div className=" w-1/2 flex justify-center items-center">
            <YouTubeEmbed videoId={page.video.split("v=")[1]} />
          </div>
        </div>
        {/* blogs */}
        {Array.isArray(page?.blogs) && page.blogs.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-12 justify-center items-center ">
            {page.blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                className="inline-flex items-center p-6 bg-sky/15 hover:text-sky text-md text-foreground rounded-full font-medium shadow transition-all duration-200 hover:scale-105 hover:shadow-lg  "
                target="_blank"
                rel="noopener noreferrer"
              >
                {blog.title}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    
  </main>
  );
}


