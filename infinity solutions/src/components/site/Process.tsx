import { Reveal, SectionHeader } from "./Reveal";
import { Search, PencilRuler, Hammer, ShieldCheck, Truck } from "lucide-react";

const steps = [
  { icon: Search, t: "Research", d: "Discovery, audits and feasibility studies with your stakeholders." },
  { icon: PencilRuler, t: "Design", d: "Concepting, CAD modelling and digital twins of every system." },
  { icon: Hammer, t: "Production", d: "Tooling, fabrication and pilot runs in our certified facilities." },
  { icon: ShieldCheck, t: "Quality Testing", d: "ISO-grade inspection, stress, and lifecycle validation." },
  { icon: Truck, t: "Delivery", d: "Global logistics, installation and continuous performance support." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Process"
          title={<>A repeatable <span className="text-gradient-orange">industrial blueprint</span></>}
          subtitle="Every engagement runs through five disciplined stages — predictable, measurable, ready to scale."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="relative text-center lg:px-3">
                  <div className="relative mx-auto w-24 h-24 rounded-2xl glass-strong flex items-center justify-center text-primary shadow-elevated">
                    <s.icon className="w-9 h-9" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-primary text-primary-foreground font-display text-sm font-bold flex items-center justify-center shadow-glow">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
