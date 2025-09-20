import { material } from "@/data/readMaterial";
import { notFound } from "next/navigation";
import React from "react";
import { YouTubeEmbed } from "@/components";
import Image from "next/image";
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
    <main className="min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex justify-center ">
          <div className="group flex px-8 py-6 rounded-2xl bg-sky/15 border border-foreground/10 shadow-lg w-full max-w-2xl transition-transform duration-200 hover:scale-105 text-foreground hover:text-blue">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-center ease-in-out duration-450 tracking-tight">
              {page.title}
            </h1>
            <span>
              <Image src={page.image} alt={page.title} width={100} height={100} className="ease-in-out duration-300 group-hover:-rotate-6" />
            </span>
          </div>
        </div>
        {/* Content + Video Section */}
        <div className="relative w-full">
          {/* Desktop: Video floats top-right, text wraps around */}
          <div className="hidden md:block">
            <div className="prose prose-lg max-w-none w-full">
              <div className="text-lg leading-relaxed text-foreground/90 px-2 py-12">
                <div className="float-right ml-8 mb-4 w-[340px] max-w-[40vw] aspect-video rounded-xl overflow-hidden shadow-xl border border-foreground/10 bg-background z-10">
                  <YouTubeEmbed videoId={page.videoId} thumbnail={`https://img.youtube.com/vi/${page.videoId}/maxresdefault.jpg`} />
                </div>
                {page.content.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
                <div className="clear-both" />
              </div>
            </div>
          </div>
          {/* Mobile: Video between paragraphs */}
          <div className="md:hidden">
            <div className="prose prose-lg max-w-none w-full">
              <div className="text-lg leading-relaxed text-foreground/90 px-2 py-6">
                {page.content.map((para, index) => (
                  <React.Fragment key={index}>
                    {/* Insert video after first paragraph only */}
                    {index === 1 && (
                      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-foreground/10 bg-background my-6">
                        <YouTubeEmbed videoId={page.videoId} />
                      </div>
                    )}
                    <p>{para}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* blogs */}
        {Array.isArray(page?.blogs) && page.blogs.length > 0 && (
          <div className="flex flex-wrap gap-6 mt-12 ">
            {page.blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                className="inline-flex items-center px-6 py-3 bg-sky/15 hover:text-sky text-lg text-foreground rounded-full font-medium shadow transition-all duration-200 hover:scale-105 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {blog.title}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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


