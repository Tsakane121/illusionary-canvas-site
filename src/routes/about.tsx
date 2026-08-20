import { createFileRoute } from "@tanstack/react-router";
import heroMural from "../assets/hero-mural.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mabasa Studio" },
      {
        name: "description",
        content:
          "Learn about Mabasa Studio, a Johannesburg-based creative practice specialising in wall painting, decorative finishes, and illusion design.",
      },
      { property: "og:title", content: "About — Mabasa Studio" },
      {
        property: "og:description",
        content:
          "A Johannesburg-based creative practice specialising in bespoke wall painting, decorative finishes, and artistic illusion design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl lg:text-6xl text-balance">
            Where craft meets <span className="italic text-primary">imagination</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={heroMural}
              alt="A living room featuring a hand-painted architectural illusion mural"
              width={1440}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl text-balance">
              A studio built on patience, pigment, and perspective
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Mabasa Studio is a Johannesburg-based creative practice devoted to the art of painted surfaces. We specialise in wall painting, decorative finishes, and optical illusion design for clients who see their interiors as canvases.
              </p>
              <p>
                Every project begins with close observation: of light, proportion, and the way a room is used. From there, we design a surface that doesn't just decorate a space, but transforms it.
              </p>
              <p>
                Our work ranges from quiet botanical murals in private homes to large-scale trompe l'oeil in hospitality spaces. What unites each piece is a commitment to hand-craft, historical technique, and a contemporary sense of place.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">Residential</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Feature walls, bedrooms, hallways, and ceilings designed for private homes.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">Commercial</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hotels, restaurants, retail spaces, and offices that want to leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Values</span>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">What guides our work</h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Hand-Craft",
                desc: "Every surface is painted by hand. No shortcuts, no generic finishes — only careful, deliberate work.",
              },
              {
                title: "Context",
                desc: "We design for the architecture, light, and atmosphere of your space, not for a trend.",
              },
              {
                title: "Collaboration",
                desc: "We work closely with homeowners, designers, and architects to ensure the result feels intentional.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-2xl bg-background p-8">
                <h3 className="font-serif text-2xl font-medium text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
