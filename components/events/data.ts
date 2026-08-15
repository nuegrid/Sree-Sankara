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
  width: number;
  height: number;
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
    image: "/images/events/Masonry_Grid/img1.jpg",
    alt: "Spiritual gathering during the journey",
    width: 2,
    height: 3,
  },
  {
    id: 2,
    image: "/images/events/Masonry_Grid/img2.jpg",
    alt: "Devotees in prayer",
    width: 1,
    height: 1,
  },
  {
    id: 3,
    image: "/images/events/Masonry_Grid/img3.jpg",
    alt: "Sacred ritual at dusk",
    width: 4,
    height: 3,
  },
  {
    id: 4,
    image: "/images/events/Masonry_Grid/img4.jpg",
    alt: "Community assembled for a discourse",
    width: 4,
    height: 3,
  },
  {
    id: 5,
    image: "/images/events/Masonry_Grid/img5.jpg",
    alt: "Moment from a spiritual programme",
    width: 3,
    height: 4,
  },
  {
    id: 6,
    image: "/images/events/Masonry_Grid/img6.jpg",
    alt: "Pilgrims gathered in devotion",
    width: 1,
    height: 2,
  },
];
