import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers";
import { Navbar, ThemeToggle } from "@/components";
import { Footer } from "@/components";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "RnG Solutions | Web Design And Development, Hosting, SEO & AI Integration",
  description:
    "RnG Solutions provides modern Web Design And Development, fast hosting & deployment, SEO optimization, and AI integration to help your business grow online.",
  keywords: [
    "RnG Solutions",
    "Web Design And Development",
    "Hosting",
    "Deployment",
    "SEO Optimization",
    "AI Integration",
    "Next.js",
  ],
  openGraph: {
    title: "RnG Solutions | Web Design And Development, Hosting, SEO & AI Integration",
    description:
      "Professional Web Design And Development, hosting, SEO optimization, and AI integration services tailored to your business needs.",
    url: "https://yourdomain.com",
    siteName: "RnG Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RnG Solutions | Web Design And Development, Hosting, SEO & AI Integration",
    description:
      "Get modern Web Design And Development, fast hosting, SEO optimization, and AI-powered solutions with RnG Solutions.",
    
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const theme = cookieStore?.get('theme') || {value:'light'};
  type Theme = 'light' | 'dark';
  return (
    <html lang="en" data-theme={theme?.value}>
      <body
        className={`font-sans bg-background text-foreground min-h-screen flex flex-col relative overflow-x-hidden`}
      >
        {/* Subtle Vibrant Background - Blue/Indigo/blue/Gray only */}
        <div className="fixed inset-0 w-full h-full -z-10 opacity-[0.25]">

          <div className="absolute inset-0 bg-gradient-to-br from-blue via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-indigo to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-400 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-indigo via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-transparent to-transparent"></div>
          </div>

        <ThemeProvider initialTheme={theme?.value as Theme}>
          <nav className="top-0 z-50  flex justify-center items-center p-4">
            <Navbar />
            <div className="ml-4">
              <ThemeToggle  />
            </div>
          </nav>

          <main className="flex-1">
            {children}
          </main>

          <footer className="">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
