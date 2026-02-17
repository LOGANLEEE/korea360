/**
 * Event data for KOREA 360 UAE.
 * status: "ongoing" = currently running, "upcoming" = not yet started
 */

export type EventStatus = "ongoing" | "upcoming";

export type Event = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  startDate: string; // ISO date or display string
  endDate: string;
  status: EventStatus;
  location?: string;
  time?: string;
};

export const EVENTS: Event[] = [
  {
    slug: "k-pop-experience-feb",
    title: "K-POP Experience Week",
    shortDescription:
      "Live performances, meet-and-greets, and K-POP merchandise pop-up at the Content Experience zone.",
    description:
      "Join us for a full week of K-POP celebrations. Enjoy live performances from emerging artists, meet-and-greet sessions, exclusive merchandise, and photo zones. The Content Experience zone transforms into a K-POP hub with daily activities and special guests.",
    startDate: "2026-02-10",
    endDate: "2026-02-24",
    status: "ongoing",
    location: "KOREA 360 UAE, Dubai Festival City Mall",
    time: "Daily 14:00–20:00",
  },
  {
    slug: "k-beauty-workshop-feb",
    title: "K-Beauty Skincare Workshop",
    shortDescription:
      "Hands-on skincare and makeup sessions with K-beauty experts. Limited slots.",
    description:
      "Learn the famous K-beauty routine from experts. Sessions cover double cleansing, sheet masks, and trending makeup looks. All materials provided. Registration required; walk-ins welcome if slots available.",
    startDate: "2026-02-15",
    endDate: "2026-02-22",
    status: "ongoing",
    location: "K-Beauty Zone, KOREA 360 UAE",
    time: "Tue, Thu, Sat 16:00–17:30",
  },
  {
    slug: "hanbok-experience",
    title: "Hanbok Try-On Experience",
    shortDescription:
      "Try on traditional Hanbok and take photos in our themed backdrop. Free for visitors.",
    description:
      "Experience Korean traditional dress with our Hanbok try-on corner. Multiple styles for adults and children. Professional photo backdrop available. No booking required; first-come, first-served during opening hours.",
    startDate: "2026-02-01",
    endDate: "2026-02-28",
    status: "ongoing",
    location: "K-Craft & Design Zone",
    time: "Mon–Sun 10:00–22:00",
  },
  {
    slug: "k-food-tasting-mar",
    title: "K-Food Tasting Festival",
    shortDescription:
      "Sample Korean snacks, drinks, and street food. New brands and classics.",
    description:
      "A curated tasting event featuring Korean snacks, beverages, and street food. Meet brands from the K-Food zone and discover new favorites. Tasting passes available at the venue.",
    startDate: "2026-03-01",
    endDate: "2026-03-07",
    status: "upcoming",
    location: "K-Food Zone, KOREA 360 UAE",
    time: "12:00–21:00",
  },
  {
    slug: "k-character-meet-mar",
    title: "K-Character Meet & Greet",
    shortDescription:
      "Meet popular K-characters, take photos, and get limited merchandise.",
    description:
      "Character appearances and photo opportunities with beloved K-characters. Limited-edition merchandise and activities for kids. Schedule will be announced closer to the date.",
    startDate: "2026-03-08",
    endDate: "2026-03-14",
    status: "upcoming",
    location: "K-Character Zone",
    time: "Weekend afternoons",
  },
  {
    slug: "korea-tourism-fair",
    title: "Korea Tourism & Travel Fair",
    shortDescription:
      "Discover travel destinations, get travel tips, and win prizes from KTO.",
    description:
      "The Korea Tourism Organization (KTO) presents a travel fair with destination booths, travel tips, cultural highlights, and giveaways. Plan your next trip to Korea with expert advice and special offers.",
    startDate: "2026-03-15",
    endDate: "2026-03-21",
    status: "upcoming",
    location: "KOREA 360 UAE main hall",
    time: "11:00–20:00",
  },
];

export const ONGOING_EVENTS = EVENTS.filter((e) => e.status === "ongoing");
export const UPCOMING_EVENTS = EVENTS.filter((e) => e.status === "upcoming");

export const EVENTS_BY_SLUG: Record<string, Event> = Object.fromEntries(
  EVENTS.map((e) => [e.slug, e])
);
