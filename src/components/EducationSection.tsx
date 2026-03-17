import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const education = [
  { degree: "PhD Materials Engineering", institution: "Kwame Nkrumah University of Science and Technology", period: "2025 – Present", icon: "🎓", gradient: "var(--gradient-primary)" },
  { degree: "Data Analyst Associate", institution: "DataCamp", period: "2024 – April 2025", icon: "📊", gradient: "var(--gradient-accent)" },
  { degree: "MPhil Materials Engineering", institution: "Kwame Nkrumah University of Science and Technology", period: "2021 – 2024", thesis: "Corrosion Inhibition Efficiency of Expired Antimalarial Drugs on 304L and 316L Stainless Steels in Acidic and Basic Media Using Electrochemical Method", icon: "🔬", gradient: "var(--gradient-warm)" },
  { degree: "Cloud Computing", institution: "Amazon Web Services", period: "2024 – Present", icon: "☁️", gradient: "var(--gradient-ocean)" },
  { degree: "BSc Materials Engineering", institution: "Kwame Nkrumah University of Science and Technology", period: "2016 – 2020", thesis: "Investigation of the Effects of Heat Treatments on the Microstructure, Mechanical Properties and Corrosion Behaviour of 304L Stainless Steel Weld Metal", icon: "🏗️", gradient: "var(--gradient-cosmic)" },
];

const EducationSection = () => (
  <section id="education" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-accent uppercase tracking-wider mb-2 block">Education</span>
        <h2 className="section-title">Academic <span className="gradient-text-accent">Background</span></h2>
        <p className="section-subtitle">Continuous learning and growth</p>
      </AnimatedSection>

      <StaggerContainer className="space-y-4">
        {education.map((edu, i) => (
          <StaggerItem key={i}>
            <motion.div whileHover={{ scale: 1.01, x: 4 }} className="glass-card flex gap-4 group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform bg-secondary">
                {edu.icon}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                  <h3 className="font-bold text-foreground">{edu.degree}</h3>
                  <span className="text-xs font-mono text-foreground px-2 py-0.5 rounded-full bg-foreground/[0.05] border border-foreground/10">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                {edu.thesis && (
                  <p className="text-xs text-muted-foreground mt-2 italic leading-relaxed border-l-2 border-foreground/15 pl-3">
                    Thesis: {edu.thesis}
                  </p>
                )}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default EducationSection;
