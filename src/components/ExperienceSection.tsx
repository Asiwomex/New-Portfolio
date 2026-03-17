import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Terateck Solutions, Kumasi",
    period: "June 2024 – June 2025",
    gradient: "var(--gradient-primary)",
    dotColor: "bg-primary",
    bullets: [
      "Designed and implemented comprehensive Terraform projects, structuring environments and modules for AWS infrastructure.",
      "Automated CI/CD backend service deployments to AWS using GitHub Actions and AWS CodeDeploy.",
      "Containerized PHP, WordPress, and Django applications using Docker for consistent deployments.",
      "Deployed and managed a Django API on AWS EC2 with Nginx, Docker, and Let's Encrypt for secure, scalable operation.",
      "Provisioned and managed AWS infrastructure using CloudFormation.",
    ],
  },
  {
    role: "Materials Lab Technician",
    company: "Ghana Highway Authority, Ho",
    period: "Aug 2021 – Feb 2022",
    gradient: "var(--gradient-accent)",
    dotColor: "bg-accent",
    bullets: [
      "Managed laboratory operations and conducted quality assurance tests on aggregates and concrete.",
      "Led geotechnical investigations, analysing soil data to support construction planning.",
      "Supervised construction sites ensuring compliance with engineering standards.",
    ],
  },
  {
    role: "National Service",
    company: "Ghana Highway Authority, Ho",
    period: "Sep 2020 – Aug 2021",
    gradient: "var(--gradient-warm)",
    dotColor: "bg-amber",
    bullets: [
      "Performed gravel exploration and soil sampling for laboratory testing.",
      "Conducted quality control and assurance testing of soil samples and aggregates.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">Experience</span>
        <h2 className="section-title">Professional <span className="gradient-text">Timeline</span></h2>
        <p className="section-subtitle">Career journey and achievements</p>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        <StaggerContainer className="space-y-8">
          {experiences.map((exp, i) => (
            <StaggerItem key={i}>
              <motion.div whileHover={{ x: 4 }} className="md:pl-16 relative">
                <div className={`hidden md:block absolute left-4 md:left-5 top-6 w-5 h-5 rounded-full ${exp.dotColor} border-4 border-background shadow-md`} />
                <div className="glass-card">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                    <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                    <span className="text-xs font-mono text-foreground px-3 py-1 rounded-full bg-foreground/[0.05] whitespace-nowrap border border-foreground/10">{exp.period}</span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
