import {
  inspiringJourneySections,
  junaAkhadaLegacySections,
  type BlogSection,
} from "./blog-articles";
import {
  keralaVisionSections,
  teachingsSections,
  kumbhMelaSections,
  sanatanaDharmaSections,
} from "./blog-articles-more";

export type { BlogSection };

export type NewsArticle = {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

export type BlogArticle = {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  slug?: string;
  body?: BlogSection[];
};

export const supportingNews: NewsArticle[] = [
  {
    id: 4,
    image: "/images/News/News/indianexpress.png",
    date: "15 Feb 2026",
    title:
      "Ascetics are expected to defend Dharma if required: Swami Anandavanam Bharathi Maharaj",
    excerpt:
      "Swami Anandavanam Bharathi Maharaj, as he is known now, recently led the grand Mahamagham Maholsavam at Thirunavaya. His transition from Marxism to spirituality was quite a tumultuous one. Once a firebrand student leader, P Salil grew disillusioned with communism and became a monk. Today, he is the Mahamandaleshwar of Juna Akhada, the ancient order of warrior monks. He tells TNIE about ‘Hindu awakening’, Kerala politics, his personal journey, and more.",
    href: "https://www.newindianexpress.com/states/kerala/2026/Feb/15/ascetics-are-expected-to-defend-dharma-if-required-swami-anandavanam-bharathi-maharaj",
  },
  {
    id: 2,
    image: "/images/News/News/firstindia.png",
    date: "17 Jan 2026",
    title:
      '"Spiritual congregation comparable to Kumbh Mela": Swami Anandavanam Bharathi Maharaj on Mahamagha Mahotsavam',
    excerpt:
      "By: FirstIndia. Malappuram: Swami Anandavanam Bharathi on Saturday spoke about the Mahamagha Mahotsavam, which is like the Kumbh Mela of South India, and said it was being re-established in its glory days.",
    href: "https://firstindia.co.in/articles/spiritual-congregation-comparable-to-kumbh-mela-swami-anandavanam-bharathi-maharaj-on-mahamagha-mahotsavam",
  },
  {
    id: 3,
    image: "/images/News/News/indiafacts.png",
    date: "29 Sep 2025",
    title:
      "From Red to Rudraksha: Swami Anandavanam Bharati’s Journey from Communism to Sanatana Dharma",
    excerpt:
      "As soon as the news of Swami Anandavanam Bharati, a Keralite saint, being appointed as Mahamandaleshwar of the Juna Akhada was flashed across digital and print media, I was intrigued. Learning about his unusual background—particularly his deep involvement with the Communist movement—I felt an urge to meet him and understand what had led a staunch Communist to renounce political life and embrace the path of Hindu monkhood.",
    href: "https://www.indiafacts.org.in/from-red-to-rudraksha-swami-anandavanam-bharatis-journey-from-communism-to-sanatana-dharma/",
  },
];

export const blogs: BlogArticle[] = [
  {
    id: 1,
    image: "/images/about/img1.jpg",
    category: "Journey",
    date: "12 Jun 2026",
    slug: "inspiring-journey-of-swami-anandavanam-bharathi",
    title:
      "The Inspiring Journey of Swami Anandavanam Bharathi: From Student Leader to Mahamandaleshwar",
    excerpt:
      "From student leadership and journalism to years of discipline in the Himalayas, his elevation as Mahamandaleshwar of Juna Akhada is a story of experience, reflection, and sincere self-discovery.",
    href: "/media/inspiring-journey-of-swami-anandavanam-bharathi",
    body: inspiringJourneySections,
  },
  {
    id: 2,
    image: "/images/home/Juna%20Akhada/juna_akhada.png",
    category: "Tradition",
    date: "28 May 2026",
    slug: "juna-akhada-preserving-an-ancient-spiritual-legacy",
    title:
      "Juna Akhada: Preserving an Ancient Spiritual Legacy for the Modern World",
    excerpt:
      "Juna Akhada is one of India’s oldest monastic orders — a living centre of discipline, learning, and service that continues to carry Sanatana Dharma into the present.",
    href: "/media/juna-akhada-preserving-an-ancient-spiritual-legacy",
    body: junaAkhadaLegacySections,
  },
  {
    id: 3,
    image: "/images/Volunteer/volunteer.jpg",
    category: "Seva",
    date: "09 May 2026",
    slug: "juna-akhada-vision-for-kerala",
    title:
      "Juna Akhada's Vision for Kerala: Building a Spiritual and Social Movement",
    excerpt:
      "With Kerala at the heart of a new chapter, Juna Akhada seeks to reconnect people with Sanatana Dharma while serving society through education, healthcare, environment, and youth.",
    href: "/media/juna-akhada-vision-for-kerala",
    body: keralaVisionSections,
  },
  {
    id: 4,
    image: "/images/home/journey/c.png",
    category: "Teachings",
    date: "21 Apr 2026",
    slug: "teachings-of-swami-anandavanam-bharathi",
    title:
      "The Teachings of Swami Anandavanam Bharathi: Finding Inner Peace Through Self-Transformation",
    excerpt:
      "Spiritual growth begins in everyday life. Swamiji’s teachings offer a practical path to inner peace through self-awareness, dharma, and sincere transformation.",
    href: "/media/teachings-of-swami-anandavanam-bharathi",
    body: teachingsSections,
  },
  {
    id: 5,
    image: "/images/events/Moments/moments1.jpg",
    category: "Pilgrimage",
    date: "04 Apr 2026",
    slug: "kumbh-mela-faith-transformation-and-tradition",
    title:
      "Kumbh Mela: A Journey of Faith, Transformation, and Timeless Tradition",
    excerpt:
      "More than the world’s largest gathering, the Kumbh Mela is a pilgrimage of inner renewal — and Juna Akhada continues to keep this living tradition accessible to devotees from Kerala.",
    href: "/media/kumbh-mela-faith-transformation-and-tradition",
    body: kumbhMelaSections,
  },
  {
    id: 6,
    image: "/images/home/hero/tumbline.jpg",
    category: "Wisdom",
    date: "16 Mar 2026",
    slug: "sanatana-dharma-in-the-modern-world",
    title:
      "Sanatana Dharma in the Modern World: Why Ancient Wisdom Still Matters Today",
    excerpt:
      "In a world of speed and noise, Sanatana Dharma still offers a way to live with clarity, compassion, and purpose — not as a retreat from modern life, but as a guide through it.",
    href: "/media/sanatana-dharma-in-the-modern-world",
    body: sanatanaDharmaSections,
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug && blog.body);
}
