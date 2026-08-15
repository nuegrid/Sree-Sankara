import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import BlogArticleContent from "@/components/media/BlogArticleContent";
import { blogs, getBlogBySlug } from "@/components/media/data";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs
    .filter((blog) => blog.slug && blog.body)
    .map((blog) => ({ slug: blog.slug as string }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) {
    return { title: "Blog | Sree Sankara" };
  }
  return {
    title: `${blog.title} | Sree Sankara`,
    description: blog.excerpt,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#FAF8F5]">
      <BlogArticleContent {...blog} />
      <Footer overlap={false} />
    </div>
  );
}
