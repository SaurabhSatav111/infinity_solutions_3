import { Reveal, SectionHeader } from "./Reveal";
import { Target, Compass, Award, Factory } from "lucide-react";
import headquartersImage from "@/assets/headquarters.png";

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl glass-strong overflow-hidden relative">
                <img src={headquartersImage} alt="Infinity Solutions manufacturing facility in Pune" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">Headquarters</div>
                      <div className="font-display text-xl font-bold mt-1">Pune · IN</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Experience</div>
                      <div className="font-display text-xl font-bold text-gradient-orange">20+ Years</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-primary shadow-glow opacity-80 blur-xl" />
            </div>
          </Reveal>

          <div>
            <SectionHeader
              align="left"
              eyebrow="About Us"
              title={<>One stop <span className="text-gradient-orange">designing, packaging & printing</span> firm</>}
              subtitle="Infinity Solutions is committed to providing speedy, specialized and personalized solutions. With more than 20 years of experience, we understand your business, stand by its value and give your brand the vigour it requires."
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Target, t: "We are Swift", d: "Committed to rapid response and excellent customer service." },
                { icon: Compass, t: "We are Flexible", d: "Versatile, adaptable, bespoke packaging for companies of any size." },
                { icon: Award, t: "We ensure Sustainability", d: "Reducing packaging costs with more sustainable solutions." },
                { icon: Factory, t: "One Stop Shop", d: "Designing, printing, packaging and advertising — all under one roof." },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 0.06}>
                  <div className="glass rounded-2xl p-5 h-full hover:border-primary/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-3">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="font-display font-semibold">{c.t}</div>
                    <p className="text-sm text-muted-foreground mt-1.5">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
