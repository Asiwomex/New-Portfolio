import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const certifications = [
  { title: "Data Analyst Associate", issuer: "DataCamp", date: "April 2025", link: "https://www.datacamp.com/certificate/DAA0010109091137", emoji: "📊", gradient: "var(--gradient-primary)" },
  { title: "Digital Ad Certificate – Digital Marketing", issuer: "Aleph Group, Inc", date: "August 2023", link: "https://learn.digitaladexpert.com/certificate/?course_id=430875&user_id=547311", emoji: "📱", gradient: "var(--gradient-accent)" },
  { title: "Sustainable Business Start-ups (SBS)", issuer: "Mastercard Foundation Africa Higher Education Health Collaborative", date: "September 2023", emoji: "🌱", gradient: "var(--gradient-warm)" },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-amber uppercase tracking-wider mb-2 block">Certifications</span>
        <h2 className="section-title">Professional <span className="gradient-text-warm">Credentials</span></h2>
        <p className="section-subtitle">Verified qualifications and certifications</p>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <StaggerItem key={i}>
            <motion.div whileHover={{ y: -6, scale: 1.02 }} className="glass-card h-full group">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: cert.gradient }} />
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform bg-secondary">
                {cert.emoji}
              </div>
              <h3 className="font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs font-mono text-primary mb-4">{cert.date}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg text-primary-foreground transition-all hover:scale-105 hover:shadow-md" style={{ background: cert.gradient }}>
                  <ExternalLink size={12} /> View Certificate
                </a>
              )}
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default CertificationsSection;
