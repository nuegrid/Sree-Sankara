import { blogs } from "@/components/media/data";

export const featuredArticle = {
  date: "15 Feb 2026",
  title:
    "Swami Anandavanam Bharathi appointed Mahamandaleshwar of Juna Akhada",
  titleLines: [
    "Ascetics are expected to defend Dharma if required: Swami Anandavanam Bharathi Maharaj",
  ] as const,
  buttonText: "Read More",
  href: "/media",
  image: "/images/News/News/indianexpress.png",
};

export const newsItems = blogs.slice(0, 3).map((blog) => ({
  id: blog.id,
  date: blog.date,
  title: blog.title,
  image: blog.image,
  href: blog.href,
}));
