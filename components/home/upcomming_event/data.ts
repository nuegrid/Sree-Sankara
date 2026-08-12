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
    title: "Card 1",
    image: "/images/home/upcoming-programs/img-1.jpg",
    location: "Kerala",
    date: "12 Aug 2026",
  },
  {
    id: 2,
    title: "Card 2",
    image: "/images/home/upcoming-programs/img-2.jpg",
    location: "Wayanad",
    date: "15 Aug 2026",
  },
  {
    id: 3,
    title: "Card 3",
    image: "/images/home/upcoming-programs/img-3.jpg",
    location: "Kochi",
    date: "20 Aug 2026",
  },
  {
    id: 4,
    title: "Card 4",
    image: "/images/home/upcoming-programs/img-4.jpg",
    location: "Kozhikode",
    date: "25 Aug 2026",
  },
];
