// src/data/sillas.ts

export type Silla = {
  slug: string;
  nombre: string;
  descripcion: string;
  medidas: string;
  tono: string;
  images: {
    main: ImageMetadata;
    thumbs: ImageMetadata[]; // [01, 02]
  };
};

// Mapeo de TODAS las imágenes de sillas
const manifest = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/img/sillas/*/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

// Helper para tomar main/01/02 sin tener que importar una por una
function pickImages(slug: string) {
  const pick = (name: string) =>
    manifest[`/src/assets/img/sillas/${slug}/${name}.png`]?.default ??
    manifest[`/src/assets/img/sillas/${slug}/${name}.jpg`]?.default ??
    manifest[`/src/assets/img/sillas/${slug}/${name}.jpeg`]?.default ??
    manifest[`/src/assets/img/sillas/${slug}/${name}.webp`]?.default;

  const main = pick("main")!;
  const t01 = pick("01")!;
  const t02 = pick("02")!;

  return { main, thumbs: [t01, t02].filter(Boolean) as ImageMetadata[] };
}

export const sillas: Silla[] = [
  {
    slug: "artezza",
    nombre: "Artezza",
    descripcion:
      "Silla con estructura de metal, tapizada en cuero PU crema. Patas color negro.",
    medidas: "57 × 54 × 84 cm",
    tono: "Crema",
    images: pickImages("artezza"),
  },
  {
    slug: "artezza-ii",
    nombre: "Artezza II",
    descripcion:
      "Silla con descansabrazos. Estructura de metal; tela gris al frente y cuero PU café en respaldo. Patas gris oscuro.",
    medidas: "53 × 66 × 77 cm",
    tono: "Gris con café",
    images: pickImages("artezza-ii"),
  },
  {
    slug: "lizza-dark-grey",
    nombre: "Lizza Dark Grey",
    descripcion:
      "Estructura de metal, tapizada en cuero PU beige. Parte trasera del respaldo con textura en tono gris oscuro.",
    medidas: "61 × 54 × 83 cm",
    tono: "Beige / Respaldo gris oscuro",
    images: pickImages("lizza-dark-grey"),
  },
  {
    slug: "forte",
    nombre: "Forte",
    descripcion:
      "Estructura de metal; PU beige al frente y cuero PU negro en respaldo. Patas color negro.",
    medidas: "58 × 56 × 78 cm",
    tono: "Negro / Beige",
    images: pickImages("forte"),
  },
  {
    slug: "sophia",
    nombre: "Sophia",
    descripcion:
      "Silla con estructura de metal, tapizada en cuero PU taupe. Patas color cobre oscuro.",
    medidas: "55 × 58 × 77 cm",
    tono: "Taupe",
    images: pickImages("sophia"),
  },
  {
    slug: "lizza-beige",
    nombre: "Lizza Beige",
    descripcion: "Estructura de metal, tapizada en cuero PU beige.",
    medidas: "61 × 54 × 83 cm",
    tono: "Beige",
    images: pickImages("lizza-beige"),
  },
  {
    slug: "novara-dark-grey",
    nombre: "Novara Dark Grey",
    descripcion:
      "Estructura de metal, tapizada en cuero PU beige oscuro. Patas color gris oscuro.",
    medidas: "62 × 55 × 79 cm",
    tono: "Gris oscuro",
    images: pickImages("novara-dark-grey"),
  },
  {
    slug: "genoa-dark-grey",
    nombre: "Genoa Dark Grey",
    descripcion: "Estructura de metal, tapizada en cuero PU gris oscuro.",
    medidas: "59 × 52 × 81 cm",
    tono: "Gris oscuro",
    images: pickImages("genoa-dark-grey"),
  },
  {
    slug: "arkko",
    nombre: "Arkko",
    descripcion:
      "Estructura de metal, tapizada en cuero PU beige oscuro. Patas color negro.",
    medidas: "58 × 53 × 83 cm",
    tono: "Dark Beige",
    images: pickImages("arkko"),
  },
  {
    slug: "ilia",
    nombre: "Ilia",
    descripcion:
      "Estructura de metal; tela gris al frente y cuero PU gris en respaldo. Patas gris oscuro.",
    medidas: "60 × 60 × 82 cm",
    tono: "Gris / Gris",
    images: pickImages("ilia"),
  },
  {
    slug: "novara-beige",
    nombre: "Novara Beige",
    descripcion:
      "Estructura de metal, tapizada en cuero PU beige oscuro. Patas color gris oscuro.",
    medidas: "62 × 55 × 79 cm",
    tono: "Beige oscuro",
    images: pickImages("novara-beige"),
  },
  {
    slug: "genoa-beige",
    nombre: "Genoa Beige",
    descripcion: "Estructura de metal, tapizada en cuero PU beige.",
    medidas: "59 × 52 × 81 cm",
    tono: "Beige",
    images: pickImages("genoa-beige"),
  },
  {
    slug: "mia",
    nombre: "Mia",
    descripcion:
      "Estructura de metal, tapizada en cuero PU taupe. Patas color gris oscuro.",
    medidas: "56 × 51 × 81 cm",
    tono: "Taupe",
    images: pickImages("mia"),
  },
  {
    slug: "corvo",
    nombre: "Corvo",
    descripcion:
      "Estructura de metal; PU beige al frente y PU gris en respaldo. Patas color negro.",
    medidas: "56 × 63 × 80 cm",
    tono: "Gris / Beige",
    images: pickImages("corvo"),
  },
  {
    slug: "aura",
    nombre: "Aura",
    descripcion:
      "Estructura de metal, tapizada en cuero PU crema. Patas color negro.",
    medidas: "57 × 54 × 84 cm",
    tono: "Crema",
    images: pickImages("aura"),
  },
];
