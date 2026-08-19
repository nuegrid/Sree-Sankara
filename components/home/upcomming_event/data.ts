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
    title: "Mahamagha Mahotsavam",
    date: "January to February 2027",
    location: "Malappuram, Kerala",
  },
  {
    id: 2,
    image: "/images/home/upcoming-programs/img-2.jpg",
    title: "Shri Ganga Mahotsav",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
  {
    id: 3,
    title: "Event coming soon",
    image: "/images/home/upcoming-programs/img-3.jpg",
    date: "date",
    location: "location",
  },
  {
    id: 4,
    title: "Event coming soon",
    image: "/images/home/upcoming-programs/img-4.jpg",
    date: "date",
    location: "location",
  },
];
