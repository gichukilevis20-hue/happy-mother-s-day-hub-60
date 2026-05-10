import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import bouquet from "@/assets/bouquet.jpg";
import { Heart, Flower2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const initialNotes = [
  { name: "Sofia", text: "Mom, you are my safe place. I love you endlessly." },
  { name: "James", text: "Thank you for every sacrifice and every hug." },
  { name: "Amara", text: "Your laugh is my favorite sound in the world." },
];

function Index() {
  const [notes, setNotes] = useState(initialNotes);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setNotes([{ name: name.trim(), text: text.trim() }, ...notes]);
    setName("");
    setText("");
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-soft)" }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.5 }} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--rose)" }} />
              May 10, 2026
            </span>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Happy <em style={{ fontFamily: "var(--font-script)", color: "var(--rose)" }}>Mother's</em> Day
            </h1>
            <p className="max-w-md text-lg text-muted-foreground">
              For the woman whose love shaped our world — today we celebrate you with flowers, words, and a little bit of magic.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#message" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                style={{ background: "var(--rose)", boxShadow: "var(--shadow-petal)" }}>
                <Heart className="h-4 w-4" /> Read the message
              </a>
              <a href="#wall" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card">
                <Flower2 className="h-4 w-4" /> Leave a note
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem]" style={{ background: "var(--blush)", filter: "blur(40px)", opacity: 0.6 }} />
            <img
              src={bouquet}
              alt="Watercolor bouquet of pink peonies and eucalyptus"
              width={1536}
              height={1536}
              className="relative w-full rounded-[2rem] object-cover"
              style={{ boxShadow: "var(--shadow-petal)", aspectRatio: "1/1" }}
            />
          </div>
        </div>
      </section>

      {/* Message */}
      <section id="message" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Flower2 className="mx-auto h-8 w-8" style={{ color: "var(--rose)" }} />
        <h2 className="mt-6 text-4xl md:text-5xl">A love letter to Mom</h2>
        <p className="mt-8 text-xl leading-relaxed text-foreground/80" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
          "A mother's arms are made of tenderness, and children sleep soundly in them."
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Thank you for the early mornings and late nights, for the lullabies and the lessons, for being the steady heartbeat of our family. Every flower in this garden blooms because of you.
        </p>
      </section>

      {/* Reasons */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Endless Patience", body: "For every question asked twice and every story heard a thousand times." },
            { title: "Unconditional Love", body: "A love that asks for nothing and gives everything in return." },
            { title: "Quiet Strength", body: "The kind that holds a whole family together, gently." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card/70 p-8 backdrop-blur transition-transform hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-soft)" }}>
              <Heart className="h-5 w-5" style={{ color: "var(--rose)" }} />
              <h3 className="mt-4 text-2xl">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wall of notes */}
      <section id="wall" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl">Leave a note for your mom</h2>
          <p className="mt-3 text-muted-foreground">Add your message to the wall of love.</p>
        </div>

        <form onSubmit={submit} className="mx-auto mt-10 max-w-xl space-y-4 rounded-3xl border border-border bg-card p-6"
          style={{ boxShadow: "var(--shadow-soft)" }}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write something sweet..."
            rows={3}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            style={{ background: "var(--rose)" }}>
            <Heart className="h-4 w-4" /> Send with love
          </button>
        </form>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {notes.map((n, i) => (
            <article key={i} className="rounded-3xl border border-border bg-card/80 p-6 backdrop-blur">
              <p className="text-base leading-relaxed text-foreground/90" style={{ fontFamily: "var(--font-display)" }}>
                "{n.text}"
              </p>
              <p className="mt-4 text-sm" style={{ fontFamily: "var(--font-script)", color: "var(--rose)" }}>
                — {n.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        Made with <Heart className="inline h-3.5 w-3.5" style={{ color: "var(--rose)" }} /> for moms everywhere
      </footer>
    </main>
  );
}
