export const FEATURED_NEWS_DIR = "/images/featured%20news";

export const featuredArticle = {
  date: "15 May 2026",
  title:
    "Swami Anandavanam Bharathi appointed Mahamandaleshwar of Juna Akhada",
  /** Exact Figma line breaks for the featured headline */
  titleLines: [
    "Swami Anandavanam Bharathi",
    "appointed Mahamandaleshwar of",
    "Juna Akhada",
  ] as const,
  buttonText: "Read More",
  href: "/media",
  image: `${FEATURED_NEWS_DIR}/Swami%20Anandavanam%20Bharathi%20appointed%20%20Mahamandaleshwar%20of%20Juna%20Akhada%20%20.png`,
};

export const newsItems = [
  {
    id: 1,
    date: "15 May 2026",
    title:
      "Swami Anandavanam Bharathi Inspires Thousands at Dharma Gathering",
    image: `${FEATURED_NEWS_DIR}/Swami%20Anandavanam%20Bharathi%20Inspires%20Thousands%20at%20Dharma%20Gathering.png`,
    href: "/media",
  },
  {
    id: 2,
    date: "15 May 2026",
    title: "A Voice of Dharma for the Modern World",
    image: `${FEATURED_NEWS_DIR}/A%20Voice%20of%20Dharma%20for%20the%20Modern%20World.png`,
    href: "/media",
  },
  {
    id: 3,
    date: "15 May 2026",
    title: "Swamiji Shares a Message of Peace and Service",
    image: `${FEATURED_NEWS_DIR}/Swamiji%20Shares%20a%20Message%20of%20Peace%20and%20Service.png`,
    href: "/media",
  },
];
