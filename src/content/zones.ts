import type { StaticImageData } from "next/image"

// NOTE:
// We intentionally use JPG/PNG assets here (not HEIC) for maximum compatibility
// with Next.js image optimization out of the box.

import kpopHero from "../../homePageAssets/K-pop photo/JPG_000274.jpg"
import kpop1 from "../../homePageAssets/K-pop photo/JPG_000292.jpg"
import kpop2 from "../../homePageAssets/K-pop photo/KakaoTalk_20251221_205049492_20.jpg"

import kbeautyHero from "../../homePageAssets/K-beauty photo/JPG_000336.jpg"
import kbeauty1 from "../../homePageAssets/K-beauty photo/JPG_000392.jpg"
import kbeauty2 from "../../homePageAssets/K-beauty photo/Dilly Dilly (1).png"

import kfoodHero from "../../homePageAssets/K-food photo/JPG_000343.jpg"
import kfood1 from "../../homePageAssets/K-food photo/JPG_000338.jpg"
import kfood2 from "../../homePageAssets/K-food photo/KakaoTalk_20251221_205049492_01.jpg"

import ktourismHero from "../../homePageAssets/K-tourism photo/KakaoTalk_20251221_205049492_15.jpg"

import kcharactersHero from "../../homePageAssets/K-Character photo/KakaoTalk_20251221_205049492_11.jpg"
import kcharacters1 from "../../homePageAssets/K-Character photo/KakaoTalk_20251221_205049492_16.jpg"
import kcharacters2 from "../../homePageAssets/K-Character photo/KakaoTalk_20251221_205049492_17.jpg"

import kcraftHero from "../../homePageAssets/K-Craft & Design photo/Goblet(black,silver).png"
import kcraft1 from "../../homePageAssets/K-Craft & Design photo/Moon Jar Objet.png"
import kcraft2 from "../../homePageAssets/K-Craft & Design photo/Shared Silence.png"

import klifeHero from "../../homePageAssets/K-Life style photo/KakaoTalk_20251221_205049492_05.jpg"
import klife1 from "../../homePageAssets/K-Life style photo/KakaoTalk_20251221_205049492_06.jpg"
import klife2 from "../../homePageAssets/K-Life style photo/KakaoTalk_20251221_205049492_07.jpg"

import kcultureHero from "../../homePageAssets/K-culture photo/KakaoTalk_20251221_205049492_12.jpg"

import contentHero from "../../homePageAssets/Content experience photo/JPG_000298.jpg"
import content1 from "../../homePageAssets/Content experience photo/KakaoTalk_20251221_205049492_18.jpg"

export type Zone = {
  slug: string
  name: string
  subtitle: string
  heroImage: StaticImageData
  highlights: { title: string; description: string }[]
  gallery: { src: StaticImageData; alt: string }[]
}

export const ZONES: Zone[] = [
  {
    slug: "k-pop",
    name: "K-POP",
    subtitle: "Music, idols, and fan culture — from global hits to emerging sounds.",
    heroImage: kpopHero,
    highlights: [
      { title: "Discover", description: "Explore artists, trends, and playlists." },
      { title: "Collect", description: "Find merchandise and fan-favorite items." },
      { title: "Share", description: "Capture moments and enjoy the atmosphere." },
    ],
    gallery: [
      { src: kpopHero, alt: "K-POP zone hero" },
      { src: kpop1, alt: "K-POP zone photo" },
      { src: kpop2, alt: "K-POP zone photo" },
    ],
  },
  {
    slug: "k-drama-cinema",
    name: "K-Drama & Cinema",
    subtitle: "Stories that travel worldwide — iconic scenes, genres, and creators.",
    heroImage: contentHero,
    highlights: [
      { title: "Scenes", description: "Spot memorable moments and aesthetics." },
      { title: "Genres", description: "From romance to thriller — find your vibe." },
      { title: "Culture", description: "Learn the context behind the stories." },
    ],
    gallery: [
      { src: contentHero, alt: "Drama & cinema visual" },
      { src: content1, alt: "Drama & cinema visual" },
      { src: kcultureHero, alt: "Culture visual" },
    ],
  },
  {
    slug: "k-beauty",
    name: "K-Beauty",
    subtitle: "Skincare, trends, and routines — simple steps, real results.",
    heroImage: kbeautyHero,
    highlights: [
      { title: "Routine", description: "Build a clear, easy regimen." },
      { title: "Trends", description: "See what’s popular right now." },
      { title: "Try", description: "Discover products and textures." },
    ],
    gallery: [
      { src: kbeautyHero, alt: "K-Beauty hero" },
      { src: kbeauty1, alt: "K-Beauty photo" },
      { src: kbeauty2, alt: "K-Beauty product visual" },
    ],
  },
  {
    slug: "k-food",
    name: "K-Food",
    subtitle: "Tastes, snacks, and Korean flavors — from comfort classics to new favorites.",
    heroImage: kfoodHero,
    highlights: [
      { title: "Taste", description: "Discover popular flavors and pairings." },
      { title: "Snacks", description: "Browse easy-to-try picks." },
      { title: "Explore", description: "Learn what makes each dish special." },
    ],
    gallery: [
      { src: kfoodHero, alt: "K-Food hero" },
      { src: kfood1, alt: "K-Food photo" },
      { src: kfood2, alt: "K-Food photo" },
    ],
  },
  {
    slug: "k-travel",
    name: "K-Travel",
    subtitle: "Plan your next Korea itinerary — neighborhoods, seasons, and must-see spots.",
    heroImage: ktourismHero,
    highlights: [
      { title: "Routes", description: "Pick themes and plan by day." },
      { title: "Seasons", description: "Find the best time to visit." },
      { title: "Tips", description: "Save time with practical guidance." },
    ],
    gallery: [
      { src: ktourismHero, alt: "K-Travel hero" },
      { src: contentHero, alt: "Travel visual" },
      { src: content1, alt: "Travel visual" },
    ],
  },
  {
    slug: "k-characters",
    name: "K-Characters",
    subtitle: "IP, cute collectibles, and collaborations — meet the characters you love.",
    heroImage: kcharactersHero,
    highlights: [
      { title: "Collect", description: "Browse adorable items and gifts." },
      { title: "Collaborate", description: "See brand collabs and limited drops." },
      { title: "Smile", description: "A zone made for photos and fun." },
    ],
    gallery: [
      { src: kcharactersHero, alt: "K-Characters hero" },
      { src: kcharacters1, alt: "K-Characters photo" },
      { src: kcharacters2, alt: "K-Characters photo" },
    ],
  },
  {
    slug: "k-craft-design",
    name: "K-Craft & Design",
    subtitle: "Objects, makers, and modern craft — where tradition meets contemporary form.",
    heroImage: kcraftHero,
    highlights: [
      { title: "Materials", description: "Wood, lacquer, metal, and ceramics." },
      { title: "Makers", description: "Curated works from Korean creators." },
      { title: "Detail", description: "Look closely — texture and form matter." },
    ],
    gallery: [
      { src: kcraftHero, alt: "Craft hero" },
      { src: kcraft1, alt: "Craft object" },
      { src: kcraft2, alt: "Craft object" },
    ],
  },
  {
    slug: "k-tech-lifestyle",
    name: "K-Tech & Lifestyle",
    subtitle: "Smart living, gadgets, and style — practical innovations for everyday life.",
    heroImage: klifeHero,
    highlights: [
      { title: "Smart", description: "Useful ideas for daily convenience." },
      { title: "Modern", description: "A clean, minimal lifestyle aesthetic." },
      { title: "Browse", description: "Scan quickly, then dive deeper." },
    ],
    gallery: [
      { src: klifeHero, alt: "Lifestyle hero" },
      { src: klife1, alt: "Lifestyle photo" },
      { src: klife2, alt: "Lifestyle photo" },
    ],
  },
  {
    slug: "k-fashion",
    name: "K-Fashion",
    subtitle: "Streetwear, brands, and looks — discover the silhouettes shaping Seoul style.",
    heroImage: klife1,
    highlights: [
      { title: "Looks", description: "Explore seasonal styling cues." },
      { title: "Brands", description: "Discover Korean labels and vibes." },
      { title: "Details", description: "Materials, fits, and color stories." },
    ],
    gallery: [
      { src: klife1, alt: "Fashion visual" },
      { src: kcultureHero, alt: "Fashion visual" },
      { src: contentHero, alt: "Fashion visual" },
    ],
  },
  {
    slug: "k-wellness",
    name: "K-Wellness",
    subtitle: "Mindful routines and self-care — a calm, refreshing reset.",
    heroImage: kcultureHero,
    highlights: [
      { title: "Calm", description: "Simple rituals for balance." },
      { title: "Care", description: "Holistic approach to wellbeing." },
      { title: "Refresh", description: "Leave with new habits to try." },
    ],
    gallery: [
      { src: kcultureHero, alt: "Wellness visual" },
      { src: kbeauty1, alt: "Wellness visual" },
      { src: klife2, alt: "Wellness visual" },
    ],
  },
  {
    slug: "k-gaming",
    name: "K-Gaming",
    subtitle: "Play, esports, and fandom — where competition and community meet.",
    heroImage: content1,
    highlights: [
      { title: "Play", description: "Try experiences and explore genres." },
      { title: "Watch", description: "Esports moments and highlights." },
      { title: "Join", description: "A space for fans and friends." },
    ],
    gallery: [
      { src: content1, alt: "Gaming visual" },
      { src: contentHero, alt: "Gaming visual" },
      { src: kpop1, alt: "Gaming visual" },
    ],
  },
  {
    slug: "k-books-webtoon",
    name: "K-Books & Webtoon",
    subtitle: "Comics, webtoons, and reads — discover Korea’s storytelling formats.",
    heroImage: contentHero,
    highlights: [
      { title: "Read", description: "Find new series and genres." },
      { title: "Discover", description: "From webtoon to adaptation." },
      { title: "Collect", description: "Pick up favorites and recommendations." },
    ],
    gallery: [
      { src: contentHero, alt: "Webtoon visual" },
      { src: content1, alt: "Webtoon visual" },
      { src: kcultureHero, alt: "Webtoon visual" },
    ],
  },
  {
    slug: "k-music-instruments",
    name: "K-Music Instruments",
    subtitle: "Sounds, tradition, and rhythm — explore how Korea’s music is made.",
    heroImage: kpop2,
    highlights: [
      { title: "Listen", description: "Hear textures across traditional and modern." },
      { title: "Learn", description: "Understand instruments and roles." },
      { title: "Feel", description: "Rhythm and melody as culture." },
    ],
    gallery: [
      { src: kpop2, alt: "Music visual" },
      { src: kpopHero, alt: "Music visual" },
      { src: kcultureHero, alt: "Music visual" },
    ],
  },
  {
    slug: "k-events",
    name: "K-Events",
    subtitle: "Seasonal moments and programs — check in for what’s happening now.",
    heroImage: contentHero,
    highlights: [
      { title: "Seasonal", description: "New themes and limited-time moments." },
      { title: "Live", description: "Performances, showcases, and pop-ups." },
      { title: "Updates", description: "Keep an eye on the latest schedules." },
    ],
    gallery: [
      { src: contentHero, alt: "Events visual" },
      { src: content1, alt: "Events visual" },
      { src: kpop1, alt: "Events visual" },
    ],
  },
  {
    slug: "k-community",
    name: "K-Community",
    subtitle: "Workshops, meetups, and culture — a place to learn together and connect.",
    heroImage: kcultureHero,
    highlights: [
      { title: "Workshops", description: "Hands-on sessions and activities." },
      { title: "Meetups", description: "Connect with fellow visitors." },
      { title: "Culture", description: "A welcoming space for discovery." },
    ],
    gallery: [
      { src: kcultureHero, alt: "Community visual" },
      { src: content1, alt: "Community visual" },
      { src: contentHero, alt: "Community visual" },
    ],
  },
]

export const ZONES_BY_SLUG: Record<string, Zone> = Object.fromEntries(
  ZONES.map((z) => [z.slug, z])
)

