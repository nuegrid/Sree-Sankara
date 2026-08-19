import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anandavan.org"),

  title: "Swami Anandhavanam | Official Website",

  description:
    "Official website of Swami Anandhavanam. Explore his journey, spiritual mission, teachings, initiatives, and charitable activities.",

  openGraph: {
    title: "Swami Anandhavanam | Official Website",

    description:
      "Discover the spiritual journey, mission, teachings, and charitable initiatives of Swami Anandhavanam.",

    url: "https://www.anandavan.org",

    siteName: "Swami Anandhavanam",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Swami Ananhdavanam Official Website",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Swami Anandhavanam | Official Website",

    description:
      "Discover the spiritual journey, mission, teachings, and charitable initiatives of Swami Anandhavanam.",

    images: ["/og-image.jpg"],
  },
};
