import { Mail, Phone, MapPin, Github, Linkedin, Globe, MessageCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroAvatar from "@/assets/hero-avatar.png";
import heroBg from "@/assets/hero-bg.png";

const roles = ["Web Developer", "Cloud & DevOps Engineer", "Materials Engineer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 30 : 70);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const stats = [
    { value: "3+", label: "Years Experience", color: "text-primary" },
    { value: "2", label: "Publications", color: "text-accent" },
    { value: "5+", label: "Projects", color: "text-amber" },
    { value: "3", label: "Certifications", color: "text-violet" },
  ];

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="container-narrow relative z-10 px-4 md:px-8 lg:px-16 pt-28 md:pt-32 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-16">
          {/* Text content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                Available for opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary font-mono text-sm mb-3"
            >
              Hello, I'm
            </motion.p>

            {/* Name section with avatar on mobile */}
            <div className="flex items-start gap-4 md:block md:gap-0">
              {/* Mobile avatar - shown only on small screens */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="md:hidden flex-shrink-0"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                  <img
                    src={heroAvatar}
                    alt="Asiwome Boateng"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* Name and role */}
              <div className="md:block">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4"
                >
                  <span className="gradient-text">ASIWOME</span>
                  <br />
                  <span className="text-foreground">BOATENG</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-base md:text-lg lg:text-xl mb-6 h-8"
                >
                  <span className="text-primary font-medium">{displayText}</span>
                  <span className="typing-cursor" />
                </motion.div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Dynamic engineer with 3+ years of experience in cloud infrastructure, materials research, and civil engineering. Proficient in automating AWS deployments using Terraform, Docker, and GitHub Actions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href="mailto:iamasiwome@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg" style={{ background: "var(--gradient-primary)" }}>
                <Mail size={16} /> Email Me
              </a>
              <a href="https://wa.me/233545271301" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-accent-foreground transition-all hover:scale-105 hover:shadow-lg" style={{ background: "var(--gradient-accent)" }}>
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="https://github.com/Asiwomex" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-foreground text-sm font-medium hover:border-primary/40 transition-all">
                <Github size={16} /> GitHub
              </a>
              <a href="https://asiwomex.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-foreground text-sm font-medium hover:border-accent/40 transition-all">
                <Globe size={16} /> Portfolio
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-foreground text-sm font-medium hover:border-primary/40 transition-all">
                <Linkedin size={16} /> LinkedIn
              </a>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-rose" /> Kumasi, Ghana</span>
              <span className="inline-flex items-center gap-1.5"><Phone size={14} className="text-accent" /> +233 545 271 301</span>
              <span className="inline-flex items-center gap-1.5"><Mail size={14} className="text-primary" /> iamasiwome@gmail.com</span>
            </motion.div>
          </div>

          {/* Profile photo - desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:flex items-center justify-center mt-12 md:mt-0"
          >
            <div className="relative">
              <div className="w-96 h-96 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src={heroAvatar}
                  alt="Asiwome Boateng - Software Engineer & Researcher"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 px-3 py-1.5 rounded-lg text-xs font-bold shadow-md bg-card border border-border"
              >
                <span className="text-accent">AWS</span>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg text-xs font-bold shadow-md bg-card border border-border"
              >
                <span className="text-primary">Docker</span>
              </motion.div>
              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-lg text-xs font-bold shadow-md bg-card border border-border"
              >
                <span className="text-amber">React</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        </motion.div>

        {/* Stats bar - outside parallax fade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03 }}
              className="glass-card text-center p-4"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-6"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground/40"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
