import { Reveal, SectionHeader } from "./Reveal";
import { ArrowUpRight, Boxes, Wrench, Cpu, Rocket } from "lucide-react";

const projects = [
  { icon: Boxes, tag: "Packaging", t: "Helix Pack v3", d: "Modular sustainable packaging system deployed across 22 SKUs.", stat: "−38% material" },
  { icon: Cpu, tag: "Automation", t: "Aether Line", d: "Autonomous bottling line with self-calibrating vision QC.", stat: "+62% throughput" },
  { icon: Wrench, tag: "Engineering", t: "Forge OS", d: "Plant-wide operating layer unifying 14 legacy machines.", stat: "99.98% uptime" },
  { icon: Rocket, tag: "R&D", t: "Project Nova", d: "Carbon-negative composite tray launched with EU partners.", stat: "−1.2t CO₂ / mo" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Industrial projects, <span className="text-gradient-orange">delivered at scale</span></>}
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-3xl glass-strong border-border hover:border-primary/40 transition-all duration-500">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-surface to-surface-elevated">
                  <div className="absolute inset-0 grid-texture opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent opacity-80" />
                  <p.icon className="absolute inset-0 m-auto w-28 h-28 text-foreground/30 group-hover:scale-110 group-hover:text-primary/60 transition-all duration-700" strokeWidth={1} />
                  <div className="absolute top-5 left-5 px-2.5 py-1 rounded-full glass text-[10px] uppercase tracking-widest font-semibold text-primary">
                    {p.tag}
                  </div>
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold shadow-glow">
                    {p.stat}
                  </div>
                </div>
                <div className="p-7 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">{p.d}</p>
                  </div>
                  <a href="#contact" className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
