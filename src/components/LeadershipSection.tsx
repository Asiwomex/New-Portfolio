import { Leaf } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const LeadershipSection = () => (
  <section id="leadership" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-emerald uppercase tracking-wider mb-2 block">Leadership</span>
        <h2 className="section-title">Entrepreneurial <span className="gradient-text-warm">Initiative</span></h2>
        <p className="section-subtitle">Building sustainable solutions</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <motion.div whileHover={{ scale: 1.01 }} className="glass-card max-w-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "var(--gradient-warm)" }} />
          <div className="flex items-start gap-4 mb-4 pt-2">
            <div className="icon-box text-2xl shrink-0" style={{ background: "var(--gradient-warm)" }}>
              <Leaf className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">Founder & CEO — PLASTICO GHANA LTD</h3>
              <p className="text-xs font-mono text-amber mt-1">September 2023 – Present</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Founded PLASTICO GHANA LTD to produce sand-plastic bricks for sustainable construction, addressing environmental waste challenges while creating affordable building materials.
          </p>
          <ul className="space-y-2">
            {[
              "Pioneered sand-plastic brick production for sustainable construction works.",
              "Developed the business model, strategic planning, and stakeholder engagement.",
              "Advancing sustainable construction practices in Ghana.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

export default LeadershipSection;
