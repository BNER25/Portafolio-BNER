export type ProjectCategory = "Product Design" | "Brand Design" | "UX Research";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  year: string;
  tags: string[];
  coverImage: string;
  images: string[];
  behanceUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "sherut-design-system",
    title: "Design System — Sherut",
    category: "Product Design",
    description:
      "Lideré la creación del primer Design System de Sherut, estableciendo fundamentos visuales, componentes reutilizables y documentación para escalar el producto de manera consistente.",
    year: "2025",
    tags: ["Design System", "Figma", "Auto Layout", "Accesibilidad"],
    coverImage: "/projects/sherut-ds/cover.jpg",
    images: [],
    featured: true,
  },
  {
    slug: "agenda-digital-sherut",
    title: "Agenda Digital — Sherut",
    category: "Product Design",
    description:
      "Diseño de la funcionalidad core 'Agenda Digital' y su plataforma web responsive, garantizando una experiencia fluida en todos los dispositivos.",
    year: "2025",
    tags: ["UX", "UI", "Responsive", "Prototipado"],
    coverImage: "/projects/agenda-digital/cover.jpg",
    images: [],
    featured: true,
  },
];

export const categories: ProjectCategory[] = [
  "Product Design",
  "Brand Design",
  "UX Research",
];
