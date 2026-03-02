import { Cloud, Code, FlaskConical, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import aboutIllustration from "@/assets/about-illustration.png";

const focusAreas = [
  {
    icon: Cloud,
    title: "DevOps & Cloud Automation",
    desc: "Automating AWS infrastructure with Terraform, Docker, and CI/CD pipelines for scalable deployments.",
    gradient: "var(--gradient-primary)",
  },
  {
    icon: Code,
    title: "Web / API Engineering",
    desc: "Building modern web applications and REST APIs with React, Next.js, Django, and Node.js.",
    gradient: "var(--gradient-accent)",
  },
  {
    icon: FlaskConical,
    title: "Materials Engineering Research",
    desc: "Peer-reviewed research in corrosion inhibition and sustainable construction materials.",
    gradient: "var(--gradient-warm)",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">About Me</span>
        <h2 className="section-title">Engineer at the <span className="gradient-text">Intersection</span></h2>
        <p className="section-subtitle max-w-2xl">
          Of cloud technology, software development, and materials science.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed text-base">
              I am a DevOps and web development professional with a strong research background in materials engineering. My experience spans automating cloud deployments on AWS using Terraform and Docker, building full-stack web applications, and conducting peer-reviewed corrosion inhibition research. I served at the Ghana Highway Authority as a lab technician and national service personnel, performing geotechnical investigations and quality assurance for highway construction. I bring analytical rigor from research and practical automation skills from industry.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <img
            src={aboutIllustration}
            alt="DevOps and cloud technology illustration"
            className="w-full max-w-md mx-auto rounded-2xl"
            loading="lazy"
          />
        </AnimatedSection>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {focusAreas.map((area) => (
          <StaggerItem key={area.title}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card group h-full"
            >
              <div className="icon-box mb-4" style={{ background: area.gradient }}>
                <area.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-lg">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{area.desc}</p>
              <div className="flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={12} />
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default AboutSection;
