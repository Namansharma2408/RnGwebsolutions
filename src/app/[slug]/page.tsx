import { material } from "@/data/readMaterial";
import { notFound } from "next/navigation";

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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {page.title}
          </h1>
          
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="text-lg leading-relaxed text-foreground/90">
            {page.content}
          </div>
        </div>

        {/* Back Button */}
        
      </div>
    </main>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = material.find((m) => m.slug === slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.title,
    description: page.content.substring(0, 160) + "...",
  };
}
