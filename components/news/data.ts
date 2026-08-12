export type NewsItem = {
  id: number;
  image: string;
  date: string;
  title: string;
  href: string;
};

// Local assets only: public/images/News
// If the folder contains fewer images than the reference shows, we reuse images
// to keep the grid structure consistent.
export const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "/images/News/img1.png",
    date: "15 May 2026",
    title:
      "Swami Anandavanam Bharathi Inspires Thousands at Dharma Gathering",
    href: "/media",
  },
  {
    id: 2,
    image: "/images/News/img2.png",
    date: "15 May 2026",
    title: "A Voice of Dharma for the Modern World",
    href: "/media",
  },
  {
    id: 3,
    image: "/images/News/img3.png",
    date: "15 May 2026",
    title: "Swamiji Shares a Message of Peace and Service",
    href: "/media",
  },
  {
    id: 4,
    image: "/images/News/img1.png",
    date: "15 May 2026",
    title:
      "Swami Anandavanam Bharathi Inspires Thousands at Dharma Gathering",
    href: "/media",
  },
  {
    id: 5,
    image: "/images/News/img2.png",
    date: "15 May 2026",
    title: "A Voice of Dharma for the Modern World",
    href: "/media",
  },
  {
    id: 6,
    image: "/images/News/img3.png",
    date: "15 May 2026",
    title: "Swamiji Shares a Message of Peace and Service",
    href: "/media",
  },
];

