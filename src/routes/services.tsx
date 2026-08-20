import { createFileRoute } from "@tanstack/react-router";
import serviceWallPainting from "../assets/service-wall-painting.jpg";
import serviceDecorative from "../assets/service-decorative.jpg";
import serviceIllusion from "../assets/service-illusion.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mabasa Studio" },
      {
        name: "description",
        content:
          "Discover bespoke wall painting, decorative finishes, and artistic illusion design services from Mabasa Studio.",
      },
      { property: "og:title", content: "Services — Mabasa Studio" },
      {
        property: "og:description",
        content:
          "Bespoke wall painting, decorative finishes, and artistic illusion design for distinctive interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    {
      image: serviceWallPainting,
      title: "Wall Painting",
      subtitle: "Custom murals & feature walls",
      description:
        "From subtle accent walls to full-room narratives, our wall painting service brings your interior vision to life. Each piece is hand-painted on-site, designed to complement your architecture, lighting, and furnishings.",
      features: [
        "Custom mural design",
        "Residential & commercial interiors",
        "Pattern and motif work",
        "Site-specific colour matching",
      ],
      alt: "An artist's hand painting an ornate decorative wall pattern",
    },
    {
      image: serviceDecorative,
      title: "Decorative Painting",
      subtitle: "Texture, depth & patina",
      description:
        "Our decorative finishes add tactility and atmosphere to any surface. We specialise in Venetian plaster, gilding, lime washes, and aged patinas that feel both luxurious and timeless.",
      features: [
        "Venetian plaster & lime wash",
        "Gold, copper & metal leaf",
        "Faux stone & marble effects",
        "Textured and layered surfaces",
      ],
      alt: "A luxurious decorative wall finish with gold leaf and plaster texture",
    },
    {
      image: serviceIllusion,
      title: "Illusion Design",
      subtitle: "Trompe l'oeil & 3D effects",
      description:
        "Our illusion designs create moments of wonder. Using precise perspective, shadow, and colour theory, we make flat walls appear to open into courtyards, recede into libraries, or hold three-dimensional objects.",
      features: [
        "Architectural trompe l'oeil",
        "3D feature walls",
        "Ceiling and sky illusions",
        "Perception-expanding spaces",
      ],
      alt: "A realistic 3D illusion of wall shelves with vases and books",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl lg:text-6xl text-balance">
            Crafted surfaces for <span className="italic text-primary">unforgettable interiors</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We offer three specialised disciplines, each delivered with artistic precision and a deep respect for your space.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {service.subtitle}
                  </span>
                  <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Process</span>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">How we work</h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, space, and budget in person or online." },
              { step: "02", title: "Design", desc: "We create sketches, colour studies, and a detailed proposal." },
              { step: "03", title: "Preparation", desc: "Walls are prepped, colours approved, and the schedule confirmed." },
              { step: "04", title: "Painting", desc: "We paint on-site, keeping your space clean and respecting your timeline." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-background p-6">
                <span className="font-serif text-3xl font-medium text-primary/40">{item.step}</span>
                <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
