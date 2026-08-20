import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import heroMural from "../assets/hero-mural.jpg";
import serviceWallPainting from "../assets/service-wall-painting.jpg";
import serviceDecorative from "../assets/service-decorative.jpg";
import serviceIllusion from "../assets/service-illusion.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mabasa Studio — Wall Painting & Illusion Art" },
      {
        name: "description",
        content:
          "Hand-painted murals, decorative finishes, and optical illusion art for homes and businesses in Johannesburg. Request a quote from Mabasa Studio.",
      },
      { property: "og:title", content: "Mabasa Studio — Wall Painting & Illusion Art" },
      {
        property: "og:description",
        content:
          "Bold hand-painted murals, decorative finishes, and illusion art that transform interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const marqueeWords = [
  "Murals",
  "Trompe l'oeil",
  "Venetian Plaster",
  "Gilding",
  "Feature Walls",
  "3D Illusion",
  "Lime Wash",
  "Hand-Painted",
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink text-ink-foreground">
        <div
          aria-hidden
          className="paint-wash animate-float-slow pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-vermilion"
        />
        <div
          aria-hidden
          className="paint-wash animate-float-slow pointer-events-none absolute right-1/3 -top-24 h-72 w-72 rounded-full bg-magenta"
          style={{ animationDelay: "-4s" }}
        />
        <div
          aria-hidden
          className="paint-wash animate-float-slow pointer-events-none absolute -bottom-24 left-1/2 h-96 w-96 rounded-full bg-cobalt"
          style={{ animationDelay: "-8s" }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-ochre">
              <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
              Wall Painting &amp; Illusion Art
            </span>
            <h1 className="mt-7 font-serif text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
              Walls that
              <span className="ml-3 italic text-ochre">bend</span>
              <br />
              <span className="bg-gradient-to-r from-vermilion via-magenta to-cobalt bg-clip-text text-transparent">
                reality.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
              Mabasa Studio paints murals, decorative finishes, and optical illusions by hand — turning flat
              surfaces into depth, colour, and story for homes, restaurants, and retail spaces.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex items-center justify-center rounded-full bg-vermilion px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_var(--vermilion)] transition-transform hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center rounded-full border border-ink-foreground/25 px-8 py-4 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                View the Portfolio
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-foreground/15 pt-8">
              {[
                { k: "12+", v: "Years painting" },
                { k: "180+", v: "Walls transformed" },
                { k: "100%", v: "Hand-painted" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-serif text-3xl font-semibold text-ochre">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-ink-foreground/55">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border border-ink-foreground/15" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
              <img
                src={heroMural}
                alt="A living room featuring a hand-painted architectural illusion mural of a classical archway opening into a garden"
                width={1440}
                height={1800}
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/90 p-4 backdrop-blur">
                <p className="font-serif text-lg font-semibold text-foreground">Archway Illusion</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Private residence · Johannesburg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-ink-foreground/15 py-4">
          <div className="no-scrollbar overflow-hidden">
            <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
              {[...marqueeWords, ...marqueeWords].map((w, i) => (
                <span
                  key={`${w}-${i}`}
                  className="flex items-center gap-10 font-serif text-lg italic text-ink-foreground/60"
                >
                  {w}
                  <span className="h-1.5 w-1.5 rounded-full bg-vermilion" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="grain relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-vermilion">
                  Services
                </span>
                <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold text-foreground text-balance sm:text-5xl">
                  Three ways we paint a space
                </h2>
              </div>
              <Link to="/services" className="brush-link text-sm font-semibold text-foreground">
                See all services →
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: serviceWallPainting,
                title: "Wall Painting",
                description:
                  "Custom murals and feature walls, drawn and painted by hand to fit your space and story.",
                alt: "An artist's hand painting an ornate decorative wall pattern",
                accent: "bg-vermilion",
              },
              {
                image: serviceDecorative,
                title: "Decorative Finishes",
                description:
                  "Venetian plaster, gilding, lime wash, and texture work that give walls material depth.",
                alt: "A luxurious decorative wall finish with gold leaf and plaster texture",
                accent: "bg-ochre",
              },
              {
                image: serviceIllusion,
                title: "Illusion Design",
                description:
                  "Trompe l'oeil and 3D optical work that opens rooms up and quietly tricks the eye.",
                alt: "A realistic 3D illusion of wall shelves with vases and books",
                accent: "bg-cobalt",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <Link to="/services" className="group flex h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <img
                      src={s.image}
                      alt={s.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    />
                    <span className={`absolute left-0 top-6 h-1.5 w-16 rounded-r-full ${s.accent}`} aria-hidden />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <span className="mt-4 text-sm font-semibold text-vermilion">Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="grain relative overflow-hidden bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-cobalt">
                  Portfolio
                </span>
                <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground text-balance sm:text-5xl">
                  Selected work
                </h2>
              </div>
              <Link to="/gallery" className="brush-link text-sm font-semibold text-foreground">
                View full gallery →
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal className="lg:row-span-2">
              <ProjectCard
                image={gallery1}
                title="Botanical Hallway"
                location="Private Residence"
                alt="A hallway with hand-painted botanical murals in warm tones"
                aspect="aspect-[4/5] lg:aspect-[3/5]"
              />
            </Reveal>
            <Reveal delay={100}>
              <ProjectCard
                image={gallery2}
                title="Classical Staircase"
                location="Luxury Estate"
                alt="A grand staircase with an architectural illusion painting"
              />
            </Reveal>
            <Reveal delay={180}>
              <ProjectCard
                image={gallery3}
                title="Geometric Retail"
                location="Boutique Store"
                alt="A retail space with a bold geometric mural"
              />
            </Reveal>
            <Reveal delay={240} className="sm:col-span-2 lg:col-span-2">
              <ProjectCard
                image={gallery4}
                title="Faux Marble Columns"
                location="Private Dining Room"
                alt="A dining room with hand-painted faux marble columns"
                aspect="aspect-[16/9]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-viridian">
              Process
            </span>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold text-foreground text-balance sm:text-5xl">
              From first sketch to final brushstroke
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              { n: "01", t: "Conversation", d: "We visit or video-call, look at the space, and talk about mood." },
              { n: "02", t: "Concept", d: "Hand sketches and colour studies, rendered onto photos of your wall." },
              { n: "03", t: "Painting", d: "On-site work with low-odour paints and tidy, protected surfaces." },
              { n: "04", t: "Reveal", d: "Sealing, touch-ups, and a care guide so the piece ages well." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="h-full border-t-2 border-foreground/15 pt-5 transition-colors hover:border-vermilion">
                  <span className="font-serif text-sm font-semibold text-vermilion">{step.n}</span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">{step.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-20 text-center text-ink-foreground">
          <div
            aria-hidden
            className="paint-wash pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-viridian"
          />
          <div
            aria-hidden
            className="paint-wash pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-vermilion"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-4xl font-semibold text-balance sm:text-5xl">
              Let's make your wall the <span className="italic text-ochre">best thing</span> in the room
            </h2>
            <p className="mt-5 text-base text-ink-foreground/75 sm:text-lg">
              Share your space, your vision, and your timeline. We reply within two business days with ideas and
              a clear quote.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex items-center justify-center rounded-full bg-vermilion px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-ink-foreground/25 px-8 py-4 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Contact the Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  image,
  title,
  location,
  alt,
  aspect = "aspect-[4/3]",
}: {
  image: string;
  title: string;
  location: string;
  alt: string;
  aspect?: string;
}) {
  return (
    <div className="group h-full overflow-hidden rounded-[1.5rem]">
      <div className={`relative h-full ${aspect} overflow-hidden`}>
        <img
          src={image}
          alt={alt}
          width={800}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 translate-y-3 p-6 text-ink-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="font-serif text-2xl font-semibold">{title}</h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-ink-foreground/75">{location}</p>
        </div>
      </div>
    </div>
  );
}
