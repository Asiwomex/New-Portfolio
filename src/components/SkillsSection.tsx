import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const skillGroups = [
  { category: "DevOps Tools & Platforms", gradient: "var(--gradient-primary)", skills: ["Terraform", "AWS", "Docker", "GitHub Actions", "Nginx", "Linux", "Bash", "Ansible", "Let's Encrypt", "CI/CD", "CloudWatch"] },
  { category: "Web & Software Development", gradient: "var(--gradient-accent)", skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Django", "Golang", "REST APIs", "HTML", "CSS"] },
  { category: "Cloud & Infrastructure", gradient: "var(--gradient-ocean)", skills: ["Infrastructure-as-Code", "Automation Workflows", "Containerization", "Load Balancing", "SSL/TLS", "Security Hardening"] },
  { category: "Data & Database Skills", gradient: "var(--gradient-warm)", skills: ["SQL", "Data Management", "Data Analysis"] },
  { category: "Materials & Engineering", gradient: "var(--gradient-sunset)", skills: ["Lab Testing", "Civil Materials Assessment", "Data Interpretation", "Technical Reporting"] },
  { category: "Soft & Leadership", gradient: "var(--gradient-cosmic)", skills: ["Team Leadership", "Collaboration", "Communication", "Mentoring", "Problem Solving"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-accent uppercase tracking-wider mb-2 block">Skills</span>
        <h2 className="section-title">Technical <span className="gradient-text-accent">Expertise</span></h2>
        <p className="section-subtitle">Professional competencies and tools</p>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full" style={{ background: group.gradient }} />
                <h3 className="font-bold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span key={skill} whileHover={{ scale: 1.08, y: -2 }} className="tag-pill cursor-default">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default SkillsSection;
