export type EventItem = {
  id: number;
  title: string;
  image: string;
  location: string;
  date: string;
};

export const events: EventItem[] = [
  {
    id: 1,
    image: "/images/home/upcoming-programs/img-1.jpg",
    title: "Shri Ganga Mahotsav 1",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
  {
    id: 2,
    image: "/images/home/upcoming-programs/img-2.jpg",
    title: "Shri Ganga Mahotsav 2",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
  {
    id: 3,
    title: "Shri Ganga Mahotsav 3",
    image: "/images/home/upcoming-programs/img-3.jpg",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
  {
    id: 4,
    title: "Shri Ganga Mahotsav 4",
    image: "/images/home/upcoming-programs/img-4.jpg",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
];
