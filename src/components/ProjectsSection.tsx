import { ExternalLink, Github, Star, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const featuredProjects = [
  {
    title: "AsiCafe",
    description: "A modern cafe ordering and showcase web application with a clean, responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://asicafe.netlify.app/",
    githubUrl: "https://github.com/Asiwomex",
    gradient: "var(--gradient-primary)",
  },
  {
    title: "AsiClothes",
    description: "An e-commerce clothing store frontend with product browsing and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://asiclothes.netlify.app/",
    githubUrl: "https://github.com/Asiwomex",
    gradient: "var(--gradient-accent)",
  },
];

const otherProjects = [
  {
    title: "Terraform AWS Infrastructure",
    description: "Comprehensive IaC project for provisioning and managing AWS environments using Terraform modules.",
    tech: ["Terraform", "AWS", "HCL"],
    githubUrl: "https://github.com/Asiwomex",
    gradient: "var(--gradient-warm)",
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Automated backend deployment pipeline using GitHub Actions and AWS CodeDeploy.",
    tech: ["GitHub Actions", "AWS CodeDeploy", "Docker"],
    githubUrl: "https://github.com/Asiwomex",
    gradient: "var(--gradient-ocean)",
  },
  {
    title: "Django API Deployment",
    description: "Dockerized Django REST API deployed on EC2 with Nginx reverse proxy and SSL.",
    tech: ["Django", "Docker", "Nginx", "AWS EC2"],
    githubUrl: "https://github.com/Asiwomex",
    gradient: "var(--gradient-cosmic)",
  },
];

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  gradient: string;
}

const ProjectCard = ({ title, description, tech, liveUrl, githubUrl, featured, gradient }: ProjectCardProps) => (
  <motion.div whileHover={{ y: -4, scale: 1.01 }} className="glass-card flex flex-col group h-full">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-foreground/[0.05] border border-foreground/10">
        <FolderKanban size={20} className="text-foreground" />
      </div>
      <div>
        {featured && (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-foreground/70 mb-1">
            <Star size={10} className="fill-amber text-amber" /> Featured
          </span>
        )}
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
      </div>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{description}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {tech.map((t) => (
        <span key={t} className="tag-pill text-[11px]">
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg text-primary-foreground transition-all hover:scale-105 hover:shadow-md"
          style={{ background: gradient }}
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-foreground/12 px-4 py-2 rounded-lg hover:border-foreground/20 transition-all bg-background/70"
        >
          <Github size={14} /> GitHub
        </a>
      )}
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className="section-padding section-decorated">
    <div className="container-narrow">
      <AnimatedSection>
        <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">Projects</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="section-subtitle">Open-source contributions and live projects</p>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {featuredProjects.map((p) => (
          <StaggerItem key={p.title}>
            <ProjectCard {...p} featured />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection delay={0.2}>
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
          <span className="w-8 h-px bg-border" /> Other Projects <span className="w-8 h-px bg-border" />
        </h3>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {otherProjects.map((p) => (
          <StaggerItem key={p.title}>
            <ProjectCard {...p} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default ProjectsSection;
