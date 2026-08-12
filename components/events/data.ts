export type EventStatus = "Live Now" | "Upcoming";

export type EventsPageItem = {
  id: number;
  image: string;
  status: EventStatus;
  title: string;
  date: string;
  location: string;
};

export type MomentItem = {
  id: number;
  image: string;
  alt: string;
};

export const events: EventsPageItem[] = [
  {
    id: 1,
    image: "/images/events/Event-cards/card1.png",
    status: "Live Now",
    title: "Shri Ganga Mahotsav 1",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
  {
    id: 2,
    image: "/images/events/Event-cards/card2.png",
    status: "Upcoming",
    title: "Shri Ganga Mahotsav 2",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
  {
    id: 3,
    image: "/images/events/Event-cards/card3.png",
    status: "Upcoming",
    title: "Shri Ganga Mahotsav 3",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
  {
    id: 4,
    image: "/images/events/Event-cards/card4.png",
    status: "Upcoming",
    title: "Shri Ganga Mahotsav 4",
    date: "15 May 2026 to 25 May 2026",
    location: "Haridwar, Uttarakhand",
  },
];

export const moments: MomentItem[] = [
  {
    id: 1,
    image: "/images/events/Moments/moments1.jpg",
    alt: "Devotees gathered at a spiritual event",
  },
  {
    id: 2,
    image: "/images/events/Moments/moments2.jpg",
    alt: "Sacred ritual during a gathering",
  },
  {
    id: 3,
    image: "/images/events/Moments/moments3.jpg",
    alt: "Community celebration with traditional attire",
  },
];
