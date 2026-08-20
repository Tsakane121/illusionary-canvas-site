import { createFileRoute } from "@tanstack/react-router";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mabasa Studio" },
      {
        name: "description",
        content:
          "Browse a selection of wall paintings, decorative finishes, and illusion designs by Mabasa Studio.",
      },
      { property: "og:title", content: "Gallery — Mabasa Studio" },
      {
        property: "og:description",
        content:
          "A portfolio of bespoke wall painting, decorative finishes, and artistic illusion design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const projects = [
    {
      image: gallery1,
      title: "Botanical Hallway",
      location: "Private Residence, Johannesburg",
      category: "Wall Painting",
      alt: "A hallway with hand-painted botanical murals in warm tones",
    },
    {
      image: gallery2,
      title: "Classical Staircase",
      location: "Luxury Estate, Pretoria",
      category: "Illusion Design",
      alt: "A grand staircase with an architectural illusion painting",
    },
    {
      image: gallery3,
      title: "Geometric Retail",
      location: "Boutique Store, Cape Town",
      category: "Wall Painting",
      alt: "A retail space with a bold geometric mural",
    },
    {
      image: gallery4,
      title: "Faux Marble Columns",
      location: "Private Dining Room, Sandton",
      category: "Decorative Painting",
      alt: "A dining room with hand-painted faux marble columns",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl lg:text-6xl text-balance">
            Walls that tell a <span className="italic text-primary">story</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A curated selection of residential and commercial projects, from quiet botanical murals to dramatic architectural illusions.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group overflow-hidden rounded-2xl ${
                  index === 0 || index === 3 ? "lg:row-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 || index === 3 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-medium">{project.title}</h3>
                    <p className="mt-1 text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">Have a project in mind?</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We'd love to hear about your space. Every commission begins with a conversation.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
