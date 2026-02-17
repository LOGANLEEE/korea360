import type { StaticImageData } from "next/image";

// Zone images from number-labeled directories 1–15 under src/assets
// One zone per folder; descriptions from 홈페이지 기본 정보.txt

// 1. Content Experience
import contentExp1 from "@/assets/1.Content_experience_photo/IMG_8775.jpg";
import contentExp2 from "@/assets/1.Content_experience_photo/IMG_8778.jpg";
import contentExp3 from "@/assets/1.Content_experience_photo/IMG_8790.jpg";
import contentExp4 from "@/assets/1.Content_experience_photo/IMG_8791.jpg";
import contentExp5 from "@/assets/1.Content_experience_photo/IMG_8792.jpg";
import contentExp6 from "@/assets/1.Content_experience_photo/IMG_8799.jpg";
import contentExp7 from "@/assets/1.Content_experience_photo/IMG_8800.jpg";
import contentExp8 from "@/assets/1.Content_experience_photo/JPG_000298.jpg";
import contentExp9 from "@/assets/1.Content_experience_photo/KakaoTalk_20251221_205049492_18.jpg";

// 2. Content Multiplex
import contentMux1 from "@/assets/2.Content_multiplex_photo/IMG_8765.jpg";
import contentMux2 from "@/assets/2.Content_multiplex_photo/IMG_8766.jpg";

// 3. K-Beauty
import kbeauty1 from "@/assets/3.K-beauty_photo/Bright 홍보사진(1).jpg";
import kbeauty2 from "@/assets/3.K-beauty_photo/Dilly Dilly (1).png";
import kbeauty3 from "@/assets/3.K-beauty_photo/JPG_000336.jpg";
import kbeauty4 from "@/assets/3.K-beauty_photo/JPG_000386.jpg";
import kbeauty5 from "@/assets/3.K-beauty_photo/JPG_000392.jpg";
import kbeauty6 from "@/assets/3.K-beauty_photo/JPG_000394.jpg";
import kbeauty7 from "@/assets/3.K-beauty_photo/JPG_000403.jpg";
import kbeauty8 from "@/assets/3.K-beauty_photo/JPG_000404.jpg";
import kbeauty9 from "@/assets/3.K-beauty_photo/JPG_000414.jpg";
import kbeauty10 from "@/assets/3.K-beauty_photo/JPG_000424.jpg";
import kbeauty11 from "@/assets/3.K-beauty_photo/JPG_000428.jpg";
import kbeauty12 from "@/assets/3.K-beauty_photo/KakaoTalk_20251221_205049492_08.jpg";
import kbeauty13 from "@/assets/3.K-beauty_photo/KakaoTalk_20251221_205049492_09.jpg";

// 4. K-Character
import kchar1 from "@/assets/4.K-Character_photo/IMG_8769.jpg";
import kchar2 from "@/assets/4.K-Character_photo/IMG_8770.jpg";
import kchar3 from "@/assets/4.K-Character_photo/IMG_8771.jpg";
import kchar4 from "@/assets/4.K-Character_photo/IMG_8772.jpg";
import kchar5 from "@/assets/4.K-Character_photo/IMG_8773.jpg";
import kchar6 from "@/assets/4.K-Character_photo/IMG_8774.jpg";
import kchar7 from "@/assets/4.K-Character_photo/IMG_8788.jpg";
import kchar8 from "@/assets/4.K-Character_photo/IMG_8789.jpg";
import kchar9 from "@/assets/4.K-Character_photo/IMG_8801.jpg";
import kchar10 from "@/assets/4.K-Character_photo/KakaoTalk_20251221_205049492_11.jpg";
import kchar11 from "@/assets/4.K-Character_photo/KakaoTalk_20251221_205049492_16.jpg";
import kchar12 from "@/assets/4.K-Character_photo/KakaoTalk_20251221_205049492_17.jpg";

// 5. K-Craft & Design
import kcraft1 from "@/assets/5.K-Craft_&_Design_photo/Goblet(black,silver).png";
import kcraft2 from "@/assets/5.K-Craft_&_Design_photo/250727.png";
import kcraft3 from "@/assets/5.K-Craft_&_Design_photo/Agijagi mini soban.jpg";
import kcraft4 from "@/assets/5.K-Craft_&_Design_photo/Connection tray.jpg";
import kcraft5 from "@/assets/5.K-Craft_&_Design_photo/Goblet(S_falling snow_silverpoint).png";
import kcraft6 from "@/assets/5.K-Craft_&_Design_photo/Gourd Bottle Objet.png";
import kcraft7 from "@/assets/5.K-Craft_&_Design_photo/Hello, there Gat Wind Chime.png";
import kcraft8 from "@/assets/5.K-Craft_&_Design_photo/Ieum collection Pure.jpg";
import kcraft9 from "@/assets/5.K-Craft_&_Design_photo/Jeonghwaran -Purifying Egg Objet (Double).jpg";
import kcraft10 from "@/assets/5.K-Craft_&_Design_photo/Jeonghwaran -Purifying Egg Objet (Single-black).jpg";
import kcraft11 from "@/assets/5.K-Craft_&_Design_photo/Jeonghwaran -Purifying Egg Objet (Single-white).jpg";
import kcraft12 from "@/assets/5.K-Craft_&_Design_photo/Moon Jar Objet.png";
import kcraft13 from "@/assets/5.K-Craft_&_Design_photo/Moonlit Silver.png";
import kcraft14 from "@/assets/5.K-Craft_&_Design_photo/Nature Mother-of-pearl Tablematt.png";
import kcraft15 from "@/assets/5.K-Craft_&_Design_photo/Nature Mother-of-pearl Tray (Leaf Series Black).jpg";
import kcraft16 from "@/assets/5.K-Craft_&_Design_photo/Nature Mother-of-pearl Tray (Moon Light).png";
import kcraft17 from "@/assets/5.K-Craft_&_Design_photo/Oriental Bowl.png";
import kcraft18 from "@/assets/5.K-Craft_&_Design_photo/Oval plate.png";
import kcraft19 from "@/assets/5.K-Craft_&_Design_photo/Paper Mulberry Stem Ottchil Basket.png";
import kcraft20 from "@/assets/5.K-Craft_&_Design_photo/Paper Mulberry Stem Ottchil Mini Soban.png";
import kcraft21 from "@/assets/5.K-Craft_&_Design_photo/Prunus Vase Objet.png";
import kcraft22 from "@/assets/5.K-Craft_&_Design_photo/Seongyeol Collection Black.png";
import kcraft23 from "@/assets/5.K-Craft_&_Design_photo/Serene Jar(静壺).png";
import kcraft24 from "@/assets/5.K-Craft_&_Design_photo/Shared Silence.png";
import kcraft25 from "@/assets/5.K-Craft_&_Design_photo/Shell Mini Objet.png";
import kcraft26 from "@/assets/5.K-Craft_&_Design_photo/The 000 Moon Jar Candle Holder (Medium).png";
import kcraft27 from "@/assets/5.K-Craft_&_Design_photo/The 000 Moon Jar Candle Holder (Mini).png";
import kcraft28 from "@/assets/5.K-Craft_&_Design_photo/The Wine Bucket (Helix).png";
import kcraft29 from "@/assets/5.K-Craft_&_Design_photo/The Wine Bucket (Single).png";
import kcraft30 from "@/assets/5.K-Craft_&_Design_photo/Vase.jpg";
import kcraft31 from "@/assets/5.K-Craft_&_Design_photo/Vessel series 500.jpg";
import kcraft32 from "@/assets/5.K-Craft_&_Design_photo/Warm Pillar.png";
import kcraft33 from "@/assets/5.K-Craft_&_Design_photo/Warm Rest.png";
import kcraft34 from "@/assets/5.K-Craft_&_Design_photo/Youseon Plate.jpg";

// 6. K-Culture
import kculture1 from "@/assets/6.K-culture_photo/IMG_8758.jpg";
import kculture2 from "@/assets/6.K-culture_photo/IMG_8759.jpg";
import kculture3 from "@/assets/6.K-culture_photo/IMG_8760.jpg";
import kculture4 from "@/assets/6.K-culture_photo/IMG_8761.jpg";
import kculture5 from "@/assets/6.K-culture_photo/KakaoTalk_20251221_205049492_12.jpg";
import kculture6 from "@/assets/6.K-culture_photo/KakaoTalk_20251221_205049492.jpg";

// 7. K-Fashion
import kfashion1 from "@/assets/7.K-fashion_photo/IMG_8767.jpg";
import kfashion2 from "@/assets/7.K-fashion_photo/IMG_8768.jpg";
import kfashion3 from "@/assets/7.K-fashion_photo/IMG_8956.jpg";
import kfashion4 from "@/assets/7.K-fashion_photo/IMG_8957.jpg";
import kfashion5 from "@/assets/7.K-fashion_photo/IMG_8958.jpg";
import kfashion6 from "@/assets/7.K-fashion_photo/IMG_8959.jpg";
import kfashion7 from "@/assets/7.K-fashion_photo/IMG_8960.jpg";
import kfashion8 from "@/assets/7.K-fashion_photo/IMG_8961.jpg";
import kfashion9 from "@/assets/7.K-fashion_photo/IMG_8962.jpg";
import kfashion10 from "@/assets/7.K-fashion_photo/IMG_8963.jpg";
import kfashion11 from "@/assets/7.K-fashion_photo/IMG_8964.jpg";
import kfashion12 from "@/assets/7.K-fashion_photo/IMG_8965.jpg";
import kfashion13 from "@/assets/7.K-fashion_photo/IMG_8966.jpg";
import kfashion14 from "@/assets/7.K-fashion_photo/IMG_8967.jpg";
import kfashion15 from "@/assets/7.K-fashion_photo/IMG_8969.jpg";

// 8. K-Food
import kfood1 from "@/assets/8.K-food_photo/IMG_8813.jpg";
import kfood2 from "@/assets/8.K-food_photo/IMG_8814.jpg";
import kfood3 from "@/assets/8.K-food_photo/IMG_8815.jpg";
import kfood4 from "@/assets/8.K-food_photo/IMG_8816.jpg";
import kfood5 from "@/assets/8.K-food_photo/IMG_8817.jpg";
import kfood6 from "@/assets/8.K-food_photo/IMG_8818.jpg";
import kfood7 from "@/assets/8.K-food_photo/IMG_8819.jpg";
import kfood8 from "@/assets/8.K-food_photo/IMG_8820.jpg";
import kfood9 from "@/assets/8.K-food_photo/IMG_8821.jpg";
import kfood10 from "@/assets/8.K-food_photo/IMG_8822.jpg";
import kfood11 from "@/assets/8.K-food_photo/IMG_8823.jpg";
import kfood12 from "@/assets/8.K-food_photo/IMG_8824.jpg";
import kfood13 from "@/assets/8.K-food_photo/IMG_8850.jpg";
import kfood14 from "@/assets/8.K-food_photo/IMG_8851.jpg";
import kfood15 from "@/assets/8.K-food_photo/IMG_8852.jpg";
import kfood16 from "@/assets/8.K-food_photo/IMG_8853.jpg";
import kfood17 from "@/assets/8.K-food_photo/JPG_000338.jpg";
import kfood18 from "@/assets/8.K-food_photo/JPG_000343.jpg";
import kfood19 from "@/assets/8.K-food_photo/JPG_000348.jpg";
import kfood20 from "@/assets/8.K-food_photo/JPG_000352.jpg";
import kfood21 from "@/assets/8.K-food_photo/JPG_000357.jpg";
import kfood22 from "@/assets/8.K-food_photo/JPG_000361.jpg";
import kfood23 from "@/assets/8.K-food_photo/JPG_000368.jpg";
import kfood24 from "@/assets/8.K-food_photo/KakaoTalk_20251221_205049492_01.jpg";
import kfood25 from "@/assets/8.K-food_photo/KakaoTalk_20251221_205049492_02.jpg";
import kfood26 from "@/assets/8.K-food_photo/KakaoTalk_20251221_205049492_03.jpg";
import kfood27 from "@/assets/8.K-food_photo/KakaoTalk_20251221_205049492_04.jpg";

// 9. K-Lifestyle
import klife1 from "@/assets/9.K-Life_style_photo/IMG_8835.jpg";
import klife2 from "@/assets/9.K-Life_style_photo/IMG_8836.jpg";
import klife3 from "@/assets/9.K-Life_style_photo/IMG_8837.jpg";
import klife4 from "@/assets/9.K-Life_style_photo/IMG_8838.jpg";
import klife5 from "@/assets/9.K-Life_style_photo/IMG_8839.jpg";
import klife6 from "@/assets/9.K-Life_style_photo/IMG_8840.jpg";
import klife7 from "@/assets/9.K-Life_style_photo/IMG_8841.jpg";
import klife8 from "@/assets/9.K-Life_style_photo/IMG_8842.jpg";
import klife9 from "@/assets/9.K-Life_style_photo/IMG_8843.jpg";
import klife10 from "@/assets/9.K-Life_style_photo/IMG_8844.jpg";
import klife11 from "@/assets/9.K-Life_style_photo/IMG_8846.jpg";
import klife12 from "@/assets/9.K-Life_style_photo/IMG_8847.jpg";
import klife13 from "@/assets/9.K-Life_style_photo/IMG_8849.jpg";
import klife14 from "@/assets/9.K-Life_style_photo/KakaoTalk_20251221_205049492_05.jpg";
import klife15 from "@/assets/9.K-Life_style_photo/KakaoTalk_20251221_205049492_06.jpg";
import klife16 from "@/assets/9.K-Life_style_photo/KakaoTalk_20251221_205049492_07.jpg";

// 10. K-POP
import kpop1 from "@/assets/10.K-pop_photo/IMG_8763.jpg";
import kpop2 from "@/assets/10.K-pop_photo/IMG_8764.jpg";
import kpop3 from "@/assets/10.K-pop_photo/IMG_8781.jpg";
import kpop4 from "@/assets/10.K-pop_photo/IMG_8782.jpg";
import kpop5 from "@/assets/10.K-pop_photo/IMG_8783.jpg";
import kpop6 from "@/assets/10.K-pop_photo/IMG_8784.jpg";
import kpop7 from "@/assets/10.K-pop_photo/IMG_8785.jpg";
import kpop8 from "@/assets/10.K-pop_photo/IMG_8787.jpg";
import kpop9 from "@/assets/10.K-pop_photo/JPG_000253.jpg";
import kpop10 from "@/assets/10.K-pop_photo/JPG_000259.jpg";
import kpop11 from "@/assets/10.K-pop_photo/JPG_000274.jpg";
import kpop12 from "@/assets/10.K-pop_photo/JPG_000292.jpg";
import kpop13 from "@/assets/10.K-pop_photo/KakaoTalk_20251221_205049492_20.jpg";
import kpop14 from "@/assets/10.K-pop_photo/KakaoTalk_20251221_205049492_21.jpg";
import kpop15 from "@/assets/10.K-pop_photo/KakaoTalk_20251221_205049492_22.jpg";
import kpop16 from "@/assets/10.K-pop_photo/KakaoTalk_20251221_205049492_23.jpg";

// 11. K-Star Hall
import kstarhall1 from "@/assets/11.K-star_hall_photo/IMG_8781.jpg";
import kstarhall2 from "@/assets/11.K-star_hall_photo/IMG_8782.jpg";
import kstarhall3 from "@/assets/11.K-star_hall_photo/IMG_8783.jpg";
import kstarhall4 from "@/assets/11.K-star_hall_photo/IMG_8784.jpg";
import kstarhall5 from "@/assets/11.K-star_hall_photo/IMG_8785.jpg";
import kstarhall6 from "@/assets/11.K-star_hall_photo/IMG_8787.jpg";

// 12. K-Tourism
import ktourism1 from "@/assets/12.K-tourism_photo/IMG_8779.jpg";
import ktourism2 from "@/assets/12.K-tourism_photo/IMG_8780.jpg";
import ktourism3 from "@/assets/12.K-tourism_photo/KakaoTalk_20251221_205049492_15.jpg";

// 13. K-Webtoon & VR
import webtoonVr1 from "@/assets/13.K-Webtoon_&_VR_photo/IMG_8757.jpg";
import webtoonVr2 from "@/assets/13.K-Webtoon_&_VR_photo/IMG_8793.jpg";
import webtoonVr3 from "@/assets/13.K-Webtoon_&_VR_photo/IMG_8794.jpg";
import webtoonVr4 from "@/assets/13.K-Webtoon_&_VR_photo/IMG_8796.jpg";
import webtoonVr5 from "@/assets/13.K-Webtoon_&_VR_photo/IMG_8797.jpg";
import webtoonVr6 from "@/assets/13.K-Webtoon_&_VR_photo/IMG_8798.jpg";

// 14. Main Atrium
import mainAtrium1 from "@/assets/14.Main_atrium_photo/IMG_8753.jpg";
import mainAtrium2 from "@/assets/14.Main_atrium_photo/IMG_8754.jpg";
import mainAtrium3 from "@/assets/14.Main_atrium_photo/IMG_8755.jpg";
import mainAtrium4 from "@/assets/14.Main_atrium_photo/IMG_8762.jpg";
import mainAtrium5 from "@/assets/14.Main_atrium_photo/IMG_8802.jpg";

// 15. VIVID 360
import vivid360_1 from "@/assets/15.Vivid360_photo/IMG_8825.jpg";
import vivid360_2 from "@/assets/15.Vivid360_photo/IMG_8826.jpg";
import vivid360_3 from "@/assets/15.Vivid360_photo/IMG_8827.jpg";
import vivid360_4 from "@/assets/15.Vivid360_photo/IMG_8828.jpg";
import vivid360_5 from "@/assets/15.Vivid360_photo/IMG_8829.jpg";
import vivid360_6 from "@/assets/15.Vivid360_photo/IMG_8830.jpg";
import vivid360_7 from "@/assets/15.Vivid360_photo/IMG_8831.jpg";
import vivid360_8 from "@/assets/15.Vivid360_photo/IMG_8832.jpg";
import vivid360_9 from "@/assets/15.Vivid360_photo/IMG_8833.jpg";
import vivid360_10 from "@/assets/15.Vivid360_photo/IMG_8834.jpg";

export type Zone = {
  slug: string;
  name: string;
  subtitle: string;
  heroImage: StaticImageData;
  highlights: { title: string; description: string }[];
  gallery: { src: StaticImageData; alt: string }[];
};

const contentExpImages = [contentExp1, contentExp2, contentExp3, contentExp4, contentExp5, contentExp6, contentExp7, contentExp8, contentExp9];
const contentMuxImages = [contentMux1, contentMux2];
const kbeautyImages = [kbeauty1, kbeauty2, kbeauty3, kbeauty4, kbeauty5, kbeauty6, kbeauty7, kbeauty8, kbeauty9, kbeauty10, kbeauty11, kbeauty12, kbeauty13];
const kcharImages = [kchar1, kchar2, kchar3, kchar4, kchar5, kchar6, kchar7, kchar8, kchar9, kchar10, kchar11, kchar12];
const kcraftImages = [kcraft1, kcraft2, kcraft3, kcraft4, kcraft5, kcraft6, kcraft7, kcraft8, kcraft9, kcraft10, kcraft11, kcraft12, kcraft13, kcraft14, kcraft15, kcraft16, kcraft17, kcraft18, kcraft19, kcraft20, kcraft21, kcraft22, kcraft23, kcraft24, kcraft25, kcraft26, kcraft27, kcraft28, kcraft29, kcraft30, kcraft31, kcraft32, kcraft33, kcraft34];
const kcultureImages = [kculture1, kculture2, kculture3, kculture4, kculture5, kculture6];
const kfashionImages = [kfashion1, kfashion2, kfashion3, kfashion4, kfashion5, kfashion6, kfashion7, kfashion8, kfashion9, kfashion10, kfashion11, kfashion12, kfashion13, kfashion14, kfashion15];
const kfoodImages = [kfood1, kfood2, kfood3, kfood4, kfood5, kfood6, kfood7, kfood8, kfood9, kfood10, kfood11, kfood12, kfood13, kfood14, kfood15, kfood16, kfood17, kfood18, kfood19, kfood20, kfood21, kfood22, kfood23, kfood24, kfood25, kfood26, kfood27];
const klifeImages = [klife1, klife2, klife3, klife4, klife5, klife6, klife7, klife8, klife9, klife10, klife11, klife12, klife13, klife14, klife15, klife16];
const kpopImages = [kpop1, kpop2, kpop3, kpop4, kpop5, kpop6, kpop7, kpop8, kpop9, kpop10, kpop11, kpop12, kpop13, kpop14, kpop15, kpop16];
const kstarhallImages = [kstarhall1, kstarhall2, kstarhall3, kstarhall4, kstarhall5, kstarhall6];
const ktourismImages = [ktourism1, ktourism2, ktourism3];
const webtoonVrImages = [webtoonVr1, webtoonVr2, webtoonVr3, webtoonVr4, webtoonVr5, webtoonVr6];
const mainAtriumImages = [mainAtrium1, mainAtrium2, mainAtrium3, mainAtrium4, mainAtrium5];
const vivid360Images = [vivid360_1, vivid360_2, vivid360_3, vivid360_4, vivid360_5, vivid360_6, vivid360_7, vivid360_8, vivid360_9, vivid360_10];

function toGallery(images: StaticImageData[], zoneName: string): { src: StaticImageData; alt: string }[] {
  return images.map((src) => ({ src, alt: `${zoneName} zone photo` }));
}

export const ZONES: Zone[] = [
  {
    slug: "contents-experience",
    name: "Contents Experience",
    subtitle:
      "Content Experience space offers an immersive showcase of Korea's diverse creative industries. Visitors can engage with interactive content, including Noraebang (Korean style singing rooms) experiences and a variety of audiovisual screenings. This space highlights Korea's cutting-edge media trends and its influence.",
    heroImage: contentExp1,
    highlights: [
      { title: "Noraebang", description: "Korean-style singing room experiences." },
      { title: "Interactive", description: "Step-In, Ulti-racer, PUBG, Nestyle and more." },
      { title: "Media", description: "Audiovisual screenings and cutting-edge trends." },
    ],
    gallery: toGallery(contentExpImages, "Contents Experience"),
  },
  {
    slug: "content-multiplex",
    name: "Content Multiplex",
    subtitle:
      "Content Multiplex is an interactive and immersive XR experience space that combines spatial sensors with integrated wall projections. Designed for all ages, this space offers a unique and engaging experience beyond passive viewing. Visitors can enjoy digital interaction-based gaming and explore a variety of immersive content.",
    heroImage: contentMux1,
    highlights: [
      { title: "XR Experience", description: "Spatial sensors and wall projections." },
      { title: "All Ages", description: "Designed for everyone to enjoy." },
      { title: "Interactive", description: "Digital gaming and immersive content." },
    ],
    gallery: toGallery(contentMuxImages, "Content Multiplex"),
  },
  {
    slug: "k-beauty",
    name: "K-Beauty",
    subtitle:
      "Step into the world of K-beauty, where you can experience a variety of skincare, haircare, and makeup products. Discover the innovation and quality behind Korea's beauty industry, and explore why it has become a global trend, all while trying some of the best products made with natural ingredients.",
    heroImage: kbeauty1,
    highlights: [
      { title: "Skincare", description: "Routines and products for every need." },
      { title: "Innovation", description: "Why K-beauty became a global trend." },
      { title: "Try", description: "Best products made with natural ingredients." },
    ],
    gallery: toGallery(kbeautyImages, "K-Beauty"),
  },
  {
    slug: "k-character",
    name: "K-Character",
    subtitle:
      "The K-Character Zone is a space dedicated to introducing Korea's 'Young Toy'. Experience a world of wonder for children, brought to life in collaboration with Korea's famous toy companies.",
    heroImage: kchar1,
    highlights: [
      { title: "Young Toy", description: "Korea's beloved character world." },
      { title: "Collaboration", description: "Famous Korean toy companies." },
      { title: "Wonder", description: "A space for children and families." },
    ],
    gallery: toGallery(kcharImages, "K-Character"),
  },
  {
    slug: "k-craft-design",
    name: "K-Craft & Design",
    subtitle:
      "An exhibition of Korean traditional crafts infused with modern design, highlighting exquisite artistry and craftsmanship. Experience the beauty and precision of Korea's timeless handmade works up close.",
    heroImage: kcraft1,
    highlights: [
      { title: "Traditional Craft", description: "Infused with modern design." },
      { title: "Artistry", description: "Exquisite craftsmanship up close." },
      { title: "Timeless", description: "Beauty and precision of handmade works." },
    ],
    gallery: toGallery(kcraftImages, "K-Craft & Design"),
  },
  {
    slug: "k-culture",
    name: "K-Culture",
    subtitle:
      "The K-Culture is a space where visitors can experience Korea's traditional culture and history at a glance. By combining Korea's representative museums and folk experience zones, it offers visitors an in-depth cultural experience of Korea.",
    heroImage: kculture1,
    highlights: [
      { title: "Traditional", description: "Culture and history at a glance." },
      { title: "Museums", description: "Representative collections and displays." },
      { title: "Folk", description: "Hands-on cultural experiences." },
    ],
    gallery: toGallery(kcultureImages, "K-Culture"),
  },
  {
    slug: "k-fashion",
    name: "K-Fashion",
    subtitle:
      "K-Fashion showcases the dynamic and evolving trends of Korean style, seamlessly blending tradition with modern innovation. Visitors can explore a curated collection of fashion, accessories, and designs from leading Korean brands and designers.",
    heroImage: kfashion1,
    highlights: [
      { title: "Trends", description: "Dynamic and evolving Korean style." },
      { title: "Tradition & Modern", description: "Seamlessly blended innovation." },
      { title: "Curated", description: "Leading brands and designers." },
    ],
    gallery: toGallery(kfashionImages, "K-Fashion"),
  },
  {
    slug: "k-food",
    name: "K-Food",
    subtitle:
      "Explore a variety of nutritional supplements made from ginseng and red ginseng, which are representative of Korean health products, and experience the taste and culture of Korea through foods that offer an authentic taste of the country.",
    heroImage: kfood1,
    highlights: [
      { title: "Ginseng", description: "Nutritional supplements and health products." },
      { title: "Taste", description: "Authentic Korean flavors." },
      { title: "Culture", description: "Food as a window to Korea." },
    ],
    gallery: toGallery(kfoodImages, "K-Food"),
  },
  {
    slug: "k-lifestyle",
    name: "K-Lifestyle",
    subtitle:
      "Experience a collection of lifestyle products from Korea, ranging from fashionable accessories to essential home appliances and convenience items. Combining Korea's innovative design with modern technology, these products bring both style and practicality to your everyday life.",
    heroImage: klife1,
    highlights: [
      { title: "Accessories", description: "Fashionable and functional items." },
      { title: "Home", description: "Appliances and convenience products." },
      { title: "Design", description: "Innovation meets everyday life." },
    ],
    gallery: toGallery(klifeImages, "K-Lifestyle"),
  },
  {
    slug: "k-pop",
    name: "K-POP",
    subtitle:
      "The K-POP exhibition showcases a curated collection of albums, official merchandise, and light sticks from renowned K-POP artists. As a key hub of the global Hallyu movement, this space offers an immersive experience into the creativity and culture of K-POP.",
    heroImage: kpop1,
    highlights: [
      { title: "Albums & Merch", description: "Official merchandise and light sticks." },
      { title: "Hallyu", description: "A key hub of the global K-POP movement." },
      { title: "Immersion", description: "Creativity and culture of K-POP." },
    ],
    gallery: toGallery(kpopImages, "K-POP"),
  },
  {
    slug: "k-star-hall",
    name: "K-Star Hall",
    subtitle:
      "K-Star Hall is a dedicated exhibition space showcasing exclusive collections from leading K-POP artists and Korean actors. Visitors can explore stage costumes, autographed collections, and other rare items that highlight the global impact of Hallyu.",
    heroImage: kstarhall1,
    highlights: [
      { title: "Exclusive", description: "Collections from K-POP and actors." },
      { title: "Stage & Autographs", description: "Costumes and rare memorabilia." },
      { title: "Hallyu", description: "The global impact of Korean culture." },
    ],
    gallery: toGallery(kstarhallImages, "K-Star Hall"),
  },
  {
    slug: "k-tourism",
    name: "K-Tourism",
    subtitle:
      "The K-Tourism is a space designed to introduce both well-known and hidden travel destinations in Korea through videos. By capturing the diverse aspects of Korea on film, this space provides UAE tourists with valuable content to help them plan their trip to Korea.",
    heroImage: ktourism1,
    highlights: [
      { title: "Destinations", description: "Well-known and hidden spots." },
      { title: "Videos", description: "Diverse aspects of Korea on film." },
      { title: "Plan", description: "Content to help plan your trip." },
    ],
    gallery: toGallery(ktourismImages, "K-Tourism"),
  },
  {
    slug: "k-webtoon-vr",
    name: "K-Webtoon & K-POP VR",
    subtitle:
      "Easily explore top Korean webtoons from eight major studios in one unified platform. A single click connects users to official viewing pages for instant access. Also, experience K-POP concerts like never before through VR with Venta X. Step into a virtual concert venue using Meta Quest and feel the excitement in full 360° immersion.",
    heroImage: webtoonVr1,
    highlights: [
      { title: "Webtoons", description: "Top Korean webtoons from eight major studios." },
      { title: "K-POP VR", description: "Virtual concerts with Venta X and Meta Quest." },
      { title: "360°", description: "Full immersion in concert and story." },
    ],
    gallery: toGallery(webtoonVrImages, "K-Webtoon & VR"),
  },
  {
    slug: "main-atrium",
    name: "Main Atrium",
    subtitle:
      "The cultural hub of KOREA 360, hosting live performances, workshops, and immersive K-content experiences. It's a space where people gather, connect, and celebrate Korean culture in action.",
    heroImage: mainAtrium1,
    highlights: [
      { title: "Live", description: "Performances and workshops." },
      { title: "Connect", description: "A space where people gather." },
      { title: "Celebrate", description: "Korean culture in action." },
    ],
    gallery: toGallery(mainAtriumImages, "Main Atrium"),
  },
  {
    slug: "vivid-360",
    name: "VIVID 360",
    subtitle:
      "An immersive media zone offering a multi-sensory experience of K-content through vivid visuals and surround sound. Feel the pulse of Korean culture through cutting-edge audiovisual storytelling.",
    heroImage: vivid360_1,
    highlights: [
      { title: "Multi-sensory", description: "Vivid visuals and surround sound." },
      { title: "K-Content", description: "Experience through cutting-edge AV." },
      { title: "Pulse", description: "Feel Korean culture in the room." },
    ],
    gallery: toGallery(vivid360Images, "VIVID 360"),
  },
];

export const ZONES_BY_SLUG: Record<string, Zone> = Object.fromEntries(
  ZONES.map((z) => [z.slug, z])
);
