import { createFileRoute, Link } from "@tanstack/react-router";
import heroMural from "../assets/hero-mural.jpg";
import serviceWallPainting from "../assets/service-wall-painting.jpg";
import serviceDecorative from "../assets/service-decorative.jpg";
import serviceIllusion from "../assets/service-illusion.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mabasa Studio — Wall Painting & Illusion Design" },
      {
        name: "description",
        content:
          "Bespoke wall painting, decorative finishes, and artistic illusion design for residential and commercial interiors in Johannesburg and beyond.",
      },
      { property: "og:title", content: "Mabasa Studio — Wall Painting & Illusion Design" },
      {
        property: "og:description",
        content:
          "Bespoke wall painting, decorative finishes, and artistic illusion design for distinctive interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div className="order-2 lg:order-1">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Bespoke Wall Art
            </span>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl lg:text-6xl text-balance">
              Painting spaces that feel like <span className="italic text-primary">another world.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mabasa Studio creates hand-painted murals, decorative finishes, and optical illusion designs that transform ordinary walls into extraordinary interiors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start Your Project
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <img
                src={heroMural}
                alt="A living room featuring a hand-painted architectural illusion mural of a classical archway opening into a garden"
                width={1440}
                height={960}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</span>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl text-balance">
                What we create
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
            >
              See all services
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              image={serviceWallPainting}
              title="Wall Painting"
              description="Custom murals, feature walls, and hand-painted artistry tailored to your space and story."
              link="/services"
              alt="An artist's hand painting an ornate decorative wall pattern"
            />
            <ServiceCard
              image={serviceDecorative}
              title="Decorative Finishes"
              description="Venetian plaster, gilding, lime washes, and textured effects that add depth and luxury."
              link="/services"
              alt="A luxurious decorative wall finish with gold leaf and plaster texture"
            />
            <ServiceCard
              image={serviceIllusion}
              title="Illusion Design"
              description="Trompe l'oeil and 3D optical illusions that challenge perception and open up spaces."
              link="/services"
              alt="A realistic 3D illusion of wall shelves with vases and books"
              className="sm:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="bg-secondary/20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</span>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl text-balance">Selected work</h2>
            </div>
            <Link
              to="/gallery"
              className="text-sm font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
            >
              View full gallery
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              image={gallery1}
              title="Botanical Hallway"
              location="Private Residence"
              alt="A hallway with hand-painted botanical murals in warm tones"
              className="lg:row-span-2"
              aspect="aspect-[4/5]"
            />
            <ProjectCard
              image={gallery2}
              title="Classical Staircase"
              location="Luxury Estate"
              alt="A grand staircase with an architectural illusion painting"
              aspect="aspect-[4/3]"
            />
            <ProjectCard
              image={gallery3}
              title="Geometric Retail"
              location="Boutique Store"
              alt="A retail space with a bold geometric mural"
              aspect="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl text-balance">
            Ready to transform your walls?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Tell us about your space, your vision, and your timeline. We'll respond within two business days.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  image,
  title,
  description,
  link,
  alt,
  className = "",
}: {
  image: string;
  title: string;
  description: string;
  link: string;
  alt: string;
  className?: string;
}) {
  return (
    <Link to={link} className={`group flex flex-col ${className}`}>
      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={alt}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-5 font-serif text-2xl font-medium text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-4 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">Learn more →</span>
    </Link>
  );
}

function ProjectCard({
  image,
  title,
  location,
  alt,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  image: string;
  title: string;
  location: string;
  alt: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div className={`group overflow-hidden rounded-2xl ${className}`}>
      <div className={`relative ${aspect} overflow-hidden`}>
        <img
          src={image}
          alt={alt}
          width={800}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="font-serif text-xl font-medium">{title}</h3>
          <p className="mt-1 text-sm opacity-90">{location}</p>
        </div>
      </div>
    </div>
  );
}
