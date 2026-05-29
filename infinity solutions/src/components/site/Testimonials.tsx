import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    q: "Infinity Solutions rebuilt our entire packaging pipeline in nine months. Throughput doubled, scrap dropped to a record low.",
    n: "Marta Hensley",
    r: "VP Operations, Northwind Foods",
  },
  {
    q: "Their engineers integrate like an internal team. The automation cell they delivered runs flawlessly across three shifts.",
    n: "Dr. Anwar Sayed",
    r: "Plant Director, Helios Manufacturing",
  },
  {
    q: "From CAD to commissioning, this was the most professional industrial partnership we've ever signed.",
    n: "Lena Kovač",
    r: "Chief Engineer, Adriatec Group",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const item = items[i];

  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Trusted by leaders"
          title={<>What our <span className="text-gradient-orange">clients say</span></>}
        />

        <Reveal>
          <div className="mt-14 relative glass-strong rounded-3xl p-10 sm:p-14 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
            <Quote className="w-12 h-12 text-primary mb-6" />

            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-display text-2xl sm:text-3xl leading-snug tracking-tight">
                    "{item.q}"
                  </p>
                  <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="font-semibold">{item.n}</div>
                      <div className="text-sm text-muted-foreground">{item.r}</div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {items.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Go to testimonial ${k + 1}`}
                    className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gradient-primary" : "w-4 bg-white/15"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/15 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/15 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
