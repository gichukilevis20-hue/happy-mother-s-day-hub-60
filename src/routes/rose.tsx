import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Flower2, Gift } from "lucide-react";
import bouquet from "@/assets/bouquet.jpg";

export const Route = createFileRoute("/rose")({
  head: () => ({
    meta: [
      { title: "Happy Mother's Day, Aunt Rose — From Levis" },
      { name: "description", content: "A heartfelt Mother's Day tribute to Aunt Rose from her nephew Levis." },
      { property: "og:title", content: "Happy Mother's Day, Aunt Rose" },
      { property: "og:description", content: "Although you are my aunt, you deserve this. Happy Mother's Day — from Levis." },
    ],
  }),
  component: RosePage,
});

function RosePage() {
  const gifts = [
    { icon: "💵", title: "Pocket Money", body: "For every time you slipped me a little something — it meant more than you know." },
    { icon: "👕", title: "Clothes on My Back", body: "Thank you for making sure I was always dressed and cared for." },
    { icon: "🚪", title: "Showing Up", body: "You visited me when I was alone. That presence is a gift I carry forever." },
  ];

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-soft)" }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.55 }} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--rose)" }} />
              For Aunt Rose
            </span>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Happy <em style={{ fontFamily: "var(--font-script)", color: "var(--rose)" }}>Mother's</em> Day
            </h1>
            <p
              className="max-w-md text-2xl leading-snug text-foreground/85"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Although you are my aunt, I felt you deserve this.
            </p>
            <p className="text-base text-muted-foreground" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
              — Happy Mother's Day, by your nephew Levis
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem]" style={{ background: "var(--blush)", filter: "blur(40px)", opacity: 0.6 }} />
            <img
              src={bouquet}
              alt="Watercolor bouquet of roses for Aunt Rose"
              width={1536}
              height={1536}
              className="relative w-full rounded-[2rem] object-cover"
              style={{ boxShadow: "var(--shadow-petal)", aspectRatio: "1/1" }}
            />
          </div>
        </div>
      </section>

      {/* Letter */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Flower2 className="mx-auto h-8 w-8" style={{ color: "var(--rose)" }} />
        <h2 className="mt-6 text-4xl md:text-5xl">For Rose, with love</h2>
        <p className="mt-8 text-xl leading-relaxed text-foreground/80" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
          "Family isn't only the people who raised us — it's the ones who chose to keep showing up."
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          You may not have given me life, but you gave me so much of what makes life kind. Thank you for the pocket money, the clothes, and most of all for visiting me when I was alone. You stepped into a mother's role without ever being asked, and today I want you to know it never went unnoticed.
        </p>
      </section>

      {/* Gifts of love */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl">A few things I'll never forget</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {gifts.map((g) => (
            <div
              key={g.title}
              className="rounded-3xl border border-border bg-card/70 p-8 backdrop-blur transition-transform hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="text-4xl">{g.icon}</div>
              <h3 className="mt-4 text-2xl">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <div
          className="rounded-3xl border border-border bg-card/80 p-10 backdrop-blur"
          style={{ boxShadow: "var(--shadow-petal)" }}
        >
          <Gift className="mx-auto h-8 w-8" style={{ color: "var(--rose)" }} />
          <p className="mt-4 text-2xl md:text-3xl" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
            "Thank you for loving me like your own."
          </p>
          <p className="mt-4 text-3xl" style={{ fontFamily: "var(--font-script)", color: "var(--rose)" }}>
            — Levis, your nephew
          </p>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        Made with <Heart className="inline h-3.5 w-3.5" style={{ color: "var(--rose)" }} /> for Aunt Rose
      </footer>
    </main>
  );
}