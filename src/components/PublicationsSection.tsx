import { FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const publications = [
  {
    authors: "Boateng, A., Arthur, E.K., Gikunoo, E. and Afriyie, E.",
    year: "2025",
    title: "Corrosion Inhibition Efficiency of Expired Antimalarial Drugs on Stainless Steels in Acidic and Basic Media",
    journal: "Results in Surfaces and Interfaces",
    page: "p.100414",
    doi: "https://doi.org/10.1016/j.rsurfi.2025.100414",
    gradient: "var(--gradient-primary)",
  },
  {
    authors: "Afriyie, E., Arthur, E.K., Gikunoo, E. and Boateng, A.",
    year: "2025",
    title: "Bentonite-Assisted Carbonization of Waste Polyethylene Terephthalate Bottles for the Removal of Heavy Metals from Polluted Water",
    journal: "Results in Surfaces and Interfaces",
    page: "p.100406",
    doi: "https://doi.org/10.1016/j.rsurfi.2024.100406",
    gradient: "var(--gradient-accent)",
  },
];

const PublicationsSection = () => (
  <section id="publications" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-accent uppercase tracking-wider mb-2 block">Publications</span>
        <h2 className="section-title">Peer-Reviewed <span className="gradient-text-accent">Research</span></h2>
        <p className="section-subtitle">Published academic work</p>
      </AnimatedSection>

      <StaggerContainer className="space-y-5">
        {publications.map((pub, i) => (
          <StaggerItem key={i}>
            <motion.div whileHover={{ x: 6 }} className="glass-card flex gap-4 group">
              <div className="icon-box shrink-0" style={{ background: "var(--gradient-mixed)" }}>
                <FileText size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-foreground leading-relaxed mb-2">
                  {pub.authors}, {pub.year}. <em className="text-primary font-medium">{pub.title}.</em>{" "}
                  <span className="text-muted-foreground">{pub.journal}, {pub.page}.</span>
                </p>
                <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-foreground/[0.05] text-foreground hover:bg-foreground/[0.08] transition-all border border-foreground/10 hover:scale-105">
                  <ExternalLink size={12} /> View Publication
                </a>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default PublicationsSection;
