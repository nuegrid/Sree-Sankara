export const JOURNEY_STEP_IDS = [
  "earlyLife",
  "education",
  "publicLife",
  "media",
  "quest",
  "sannyasa",
  "mahamandaleshwar",
  "southIndia",
] as const;

export const PRINCIPLE_IDS = ["mission", "vision", "purpose"] as const;

export const TEACHING_IDS = [
  "dharma",
  "strength",
  "family",
  "culture",
  "service",
] as const;

export const journeySteps = [
  {
    id: "earlyLife",
    title: "Early Life",
    place: "Chalakkudy, Thrissur, Kerala",
    description:
      "Born as Salil into the Menokki family of Chalakkudy in Thrissur district, Kerala.",
  },
  {
    id: "education",
    title: "Education",
    place: "Kerala Varma College, Thrissur",
    description:
      "Pursued graduate and postgraduate studies in Political Science.",
  },
  {
    id: "publicLife",
    title: "Public & Student Life",
    place: null,
    description:
      "Actively engaged in student activism and public life before entering the media profession.",
  },
  {
    id: "media",
    title: "Media & Literature",
    place: null,
    description:
      "Worked with Mathrubhumi and was involved in media consultancy. He also pursued his interest in Malayalam literature, including writing.",
  },
  {
    id: "quest",
    title: "Spiritual Quest",
    place: null,
    description:
      "His search for deeper meaning and truth gradually led him towards spiritual life and renunciation.",
  },
  {
    id: "sannyasa",
    title: "Sannyasa",
    place: null,
    description:
      "Entered the monastic tradition and was initiated as Swami Anandavanam Bharati.",
  },
  {
    id: "mahamandaleshwar",
    title: "Mahamandaleshwar",
    place: null,
    description:
      "Elevated to the position of Mahamandaleshwar in the Juna Akhada at Prayagraj Kumbhamela in January 2025.",
  },
  {
    id: "southIndia",
    title: "South India",
    place: null,
    description:
      "Continues spiritual and cultural activities with a particular focus on Kerala and South India.",
  },
] as const;

export const missionItems = [
  {
    key: "mission",
    title: "Mission",
    body: "To nurture spiritual awareness, uphold the values of Sanatana Dharma, strengthen families and communities, and inspire individuals towards a life rooted in dharma, compassion, discipline and service.",
  },
  {
    key: "vision",
    title: "Vision",
    body: "To contribute to the spiritual and cultural renewal of society by reconnecting individuals and communities with India's civilisational wisdom while carrying its values meaningfully into the contemporary world.",
  },
  {
    key: "purpose",
    title: "Purpose",
    body: "To serve as a bridge between India's ancient spiritual traditions and present-day society through spiritual education, dharmic discourse, cultural preservation, community engagement and service.",
  },
] as const;

export const teachings = [
  {
    key: "dharma",
    title: "Dharma as a Way of Life",
    description:
      "Dharma is not limited to ritual or religious observance. It encompasses ethical conduct, responsibility, social duty and a commitment to what is right.",
  },
  {
    key: "strength",
    title: "Spiritual Strength",
    description:
      "Spirituality should not remain confined to personal practice. It should contribute to stronger individuals, families and communities.",
  },
  {
    key: "family",
    title: "Family & Society",
    description:
      "Swamiji's teachings emphasise the importance of families being spiritually and financially strong, while grounding social life in the fourfold objectives of Dharma, Artha, Kama and Moksha.",
  },
  {
    key: "culture",
    title: "Cultural Continuity",
    description:
      "His public work places considerable emphasis on preserving India's spiritual traditions, pilgrimage centres, temple traditions and cultural memory.",
  },
  {
    key: "service",
    title: "Service",
    description:
      "Spirituality is linked with responsibility towards society and the preservation of the natural and cultural environment.",
  },
] as const;
