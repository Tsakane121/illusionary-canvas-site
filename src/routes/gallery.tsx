import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/Reveal";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import serviceWallPainting from "../assets/service-wall-painting.jpg";
import serviceDecorative from "../assets/service-decorative.jpg";
import serviceIllusion from "../assets/service-illusion.jpg";
import heroMural from "../assets/hero-mural.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mural & Illusion Art Portfolio | Mabasa Studio" },
      {
        name: "description",
        content:
          "Browse hand-painted murals, decorative finishes, and trompe l'oeil illusion projects by Mabasa Studio across homes and businesses.",
      },
      { property: "og:title", content: "Gallery — Mabasa Studio" },
      {
        property: "og:description",
        content: "A visual portfolio of wall painting, decorative finishes, and illusion art.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

type Project = {
  image: string;
  title: string;
  location: string;
  category: string;
  alt: string;
  accent: string;
  span: string;
  aspect: string;
};

const projects: Project[] = [
  {
    image: gallery1,
    title: "Botanical Hallway",
    location: "Private Residence, Johannesburg",
    category: "Wall Painting",
    alt: "A hallway with hand-painted botanical murals in warm tones",
    accent: "bg-vermilion",
    span: "lg:col-span-4 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    image: gallery2,
    title: "Classical Staircase",
    location: "Luxury Estate, Pretoria",
    category: "Illusion Design",
    alt: "A grand staircase with an architectural illusion painting",
    accent: "bg-cobalt",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    image: gallery3,
    title: "Geometric Retail",
    location: "Boutique Store, Cape Town",
    category: "Wall Painting",
    alt: "A retail space with a bold geometric mural",
    accent: "bg-magenta",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    image: gallery4,
    title: "Faux Marble Columns",
    location: "Private Dining Room, Sandton",
    category: "Decorative Finishes",
    alt: "A dining room with hand-painted faux marble columns",
    accent: "bg-ochre",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    image: heroMural,
    title: "Archway Illusion",
    location: "Living Room, Johannesburg",
    category: "Illusion Design",
    alt: "A living room mural of a classical archway opening onto a garden",
    accent: "bg-cobalt",
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    image: serviceDecorative,
    title: "Gilded Plaster Panel",
    location: "Hotel Lounge, Sandton",
    category: "Decorative Finishes",
    alt: "A luxurious decorative wall finish with gold leaf and plaster texture",
    accent: "bg-ochre",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    image: serviceWallPainting,
    title: "Ornamental Detailing",
    location: "Heritage Home, Parktown",
    category: "Wall Painting",
    alt: "An artist's hand painting an ornate decorative wall pattern",
    accent: "bg-vermilion",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    image: serviceIllusion,
    title: "Painted Shelving",
    location: "Studio Office, Rosebank",
    category: "Illusion Design",
    alt: "A realistic 3D illusion of wall shelves with vases and books",
    accent: "bg-viridian",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
];

const categories = ["All", "Wall Painting", "Decorative Finishes", "Illusion Design"];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink py-20 text-ink-foreground lg:py-24">
        <div
          aria-hidden
          className="paint-wash pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-magenta"
        />
        <div
          aria-hidden
          className="paint-wash pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-viridian"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-ochre">
            Portfolio
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
            Walls that tell a <span className="italic text-ochre">story</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
            Residential and commercial commissions — from quiet botanical murals to architectural illusions that
            open a room right up.
          </p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="grain py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto pb-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === c
                    ? "border-transparent bg-ink text-ink-foreground"
                    : "border-foreground/15 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid auto-rows-auto gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {visible.map((project, index) => (
              <Reveal key={project.title} delay={(index % 3) * 100} className={project.span}>
                <figure className="group relative h-full overflow-hidden rounded-[1.5rem] bg-muted">
                  <div className={`relative ${project.aspect} overflow-hidden`}>
                    <img
                      src={project.image}
                      alt={project.alt}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    />
                    <span className={`absolute left-0 top-6 h-1.5 w-16 rounded-r-full ${project.accent}`} aria-hidden />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <figcaption className="absolute bottom-0 left-0 translate-y-3 p-6 text-ink-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ochre">
                        {project.category}
                      </span>
                      <h2 className="mt-2 font-serif text-2xl font-semibold">{project.title}</h2>
                      <p className="mt-1 text-sm text-ink-foreground/80">{project.location}</p>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-secondary/60 px-6 py-16 text-center">
          <h2 className="font-serif text-4xl font-semibold text-foreground text-balance sm:text-5xl">
            Have a wall in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Every commission starts with a conversation about the space, the light, and the feeling you want.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              hash="quote"
              className="inline-flex items-center justify-center rounded-full bg-vermilion px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              Contact the Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
