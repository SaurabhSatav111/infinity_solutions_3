import { Reveal, SectionHeader } from "./Reveal";
import { Package, Boxes, UtensilsCrossed, Box, Layers, Gift, Printer, Palette, Coffee, ArrowUpRight } from "lucide-react";

import monocartonsImage from "@/assets/services/monocartons-folding-cartons.png";
import clamshellImage from "@/assets/services/clamshell-tray-cartons.png";
import foodPackagingImage from "@/assets/services/food-packaging-boxes.png";
import corrugatedImage from "@/assets/services/corrugated-boxes.png";
import flexiblePrintingImage from "@/assets/services/flexible-printing.png";
import rigidBoxesImage from "@/assets/services/rigid-boxes.png";
import commercialPrintingImage from "@/assets/services/commercial-printing.png";
import designingBrandingImage from "@/assets/services/designing-branding.png";
import paperGlassImage from "@/assets/services/paper-glass-printing.png";

const services = [
  {
    icon: Package,
    t: "Monocartons & Folding Cartons",
    d: "Cartons with brilliant color graphics and seemingly endless shape & configuration possibilities.",
    image: monocartonsImage,
  },
  {
    icon: Boxes,
    t: "Clamshell & Tray Cartons",
    d: "Complete packaging solutions for fast food, confectionery and bakery products.",
    image: clamshellImage,
  },
  {
    icon: UtensilsCrossed,
    t: "Food Packaging Boxes",
    d: "Safe, hygienic and food grade packaging solutions tailored for the F&B industry.",
    image: foodPackagingImage,
  },
  {
    icon: Box,
    t: "Corrugated Boxes",
    d: "Boxes for shipping and storage with fluting options — custom printed or plain.",
    image: corrugatedImage,
  },
  {
    icon: Layers,
    t: "Flexible Printing",
    d: "Multilayer flexible packaging, stand-up pouches & rollstock engineered for your product formulation.",
    image: flexiblePrintingImage,
  },
  {
    icon: Gift,
    t: "Rigid Boxes",
    d: "Premium rigid boxes that elevate the unboxing experience and protect high-value products.",
    image: rigidBoxesImage,
  },
  {
    icon: Printer,
    t: "Commercial Printing",
    d: "Printing services for all business communication — creating rich, textured and engaging experiences.",
    image: commercialPrintingImage,
  },
  {
    icon: Palette,
    t: "Designing & Branding",
    d: "A complete range of creative services & innovative design solutions to grow your business.",
    image: designingBrandingImage,
  },
  {
    icon: Coffee,
    t: "Customized Paper Glass Printing",
    d: "Elevate your brand with high-quality, affordable customized paper glass printing.",
    image: paperGlassImage,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-surface/40">
      <div className="absolute inset-0 grid-texture opacity-25 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Services"
          title={<>Exceptional <span className="text-gradient-orange">packaging & printing</span> services</>}
          subtitle="We solve every packaging, printing and design need — with options galore for branding and digital marketing."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-elevated transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100"
                  style={{ background: "radial-gradient(400px circle at 50% 0%, oklch(0.88 0.18 130 / 0.14), transparent 60%)" }}
                />

                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-surface">
                  <img
                    src={s.image}
                    alt={s.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="relative p-7">
                  <div className="w-12 h-12 rounded-xl glass-strong text-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                    Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

