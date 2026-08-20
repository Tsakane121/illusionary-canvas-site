import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitEnquiry } from "../lib/enquiries.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mabasa Studio" },
      {
        name: "description",
        content:
          "Get in touch with Mabasa Studio for wall painting, decorative finishes, and illusion design enquiries and bookings.",
      },
      { property: "og:title", content: "Contact — Mabasa Studio" },
      {
        property: "og:description",
        content:
          "Request a consultation for bespoke wall painting, decorative finishes, or artistic illusion design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      await submitEnquiry({ data });
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-secondary/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl lg:text-6xl text-balance">
            Start your <span className="italic text-primary">transformation</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us a little about your project and we'll be in touch within two business days.
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <div className="rounded-2xl bg-background p-8 shadow-sm ring-1 ring-border/60 lg:p-10">
            {status === "success" ? (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 font-serif text-2xl font-medium text-foreground">Enquiry received</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for reaching out. We'll review your project and respond within two business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-primary underline underline-offset-4"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="+27 12 345 6789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">
                    Service of interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="Wall Painting">Wall Painting</option>
                    <option value="Decorative Painting">Decorative Painting</option>
                    <option value="Illusion Design">Illusion Design</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Describe your space, timeline, and any ideas you have in mind..."
                  />
                </div>

                {status === "error" && (
                  <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                    {errorMessage || "Something went wrong. Please try again."}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground">Email</h3>
                <a
                  href="mailto:hello@mabasastudio.com"
                  className="mt-2 block text-base text-muted-foreground transition-colors hover:text-primary"
                >
                  hello@mabasastudio.com
                </a>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground">Phone</h3>
                <a
                  href="tel:+27123456789"
                  className="mt-2 block text-base text-muted-foreground transition-colors hover:text-primary"
                >
                  +27 12 345 6789
                </a>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground">Location</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Johannesburg, South Africa
                  <br />
                  Available for projects nationwide
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground">Response time</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  We aim to respond to all enquiries within two business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
