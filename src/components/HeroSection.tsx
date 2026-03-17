import {
  ArrowUpRight,
  ChevronDown,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
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
          setTimeout(() => setIsDeleting(true), 1700);
        }
      } else if (displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 40 : 65);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const stats = [
    { value: "3+", label: "Years Experience", color: "text-primary" },
    { value: "2", label: "Publications", color: "text-accent" },
    { value: "5+", label: "Projects", color: "text-amber" },
    { value: "3", label: "Certifications", color: "text-violet" },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-10 md:pt-36">
      <div className="absolute inset-0 opacity-15">
        <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-white/55" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 rounded-full blur-3xl bg-slate-200/40" />

      <div className="container-narrow relative z-10 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <span className="glass-pill inline-flex items-center gap-2 text-xs font-semibold text-foreground mb-6">
              <Sparkles size={14} className="text-primary" /> Available for opportunities
            </span>

            <p className="text-primary font-mono text-sm mb-3">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] mb-5">
              <span className="gradient-text">ASIWOME</span>
              <br />
              <span className="text-foreground">BOATENG</span>
            </h1>

            <div className="text-base md:text-xl mb-7 h-8 md:h-9 font-semibold">
              <span className="text-primary">{displayText}</span>
              <span className="typing-cursor" />
            </div>

            <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed text-[15px] md:text-base">
              Dynamic engineer with 3+ years of experience in cloud infrastructure, materials research, and civil engineering.
              I build reliable systems with AWS, Terraform, Docker, and modern web stacks.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="mailto:iamasiwome@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-primary)" }}
              >
                <Mail size={16} /> Email Me
              </a>
              <a
                href="https://wa.me/233545271301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-accent-foreground transition-all hover:scale-[1.03]"
                style={{ background: "var(--gradient-accent)", boxShadow: "var(--glow-accent)" }}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href="https://github.com/Asiwomex"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill inline-flex items-center gap-2 text-foreground text-sm font-semibold hover:border-primary/40 transition-all"
              >
                <Github size={16} /> GitHub <ArrowUpRight size={14} className="opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill inline-flex items-center gap-2 text-foreground text-sm font-semibold hover:border-primary/40 transition-all"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://asiwomex.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill inline-flex items-center gap-2 text-foreground text-sm font-semibold hover:border-accent/40 transition-all"
              >
                <Globe size={16} /> Portfolio
              </a>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-rose" /> Kumasi, Ghana
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} className="text-accent" /> +233 545 271 301
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} className="text-primary" /> iamasiwome@gmail.com
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="max-w-md mx-auto">
              <div className="relative mx-auto w-[320px] h-[320px] md:w-[410px] md:h-[410px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border border-dashed border-foreground/22"
                />
                <div className="absolute inset-5 rounded-full overflow-hidden border-4 border-white/60 shadow-2xl">
                  <img
                    src={heroAvatar}
                    alt="Asiwome Boateng - Software Engineer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                <motion.div
                  animate={{ y: [-7, 7, -7] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-pill absolute -top-2 right-8 text-xs font-bold"
                >
                  <span className="text-accent">AWS</span>
                </motion.div>
                <motion.div
                  animate={{ y: [6, -5, 6] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-pill absolute bottom-4 -left-2 text-xs font-bold"
                >
                  <span className="text-primary">Docker</span>
                </motion.div>
                <motion.div
                  animate={{ y: [-5, 7, -5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-pill absolute top-1/2 -right-6 -translate-y-1/2 text-xs font-bold"
                >
                  <span className="text-amber">React</span>
                </motion.div>

                {/* <div className="absolute bottom-6 right-10 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/55 text-white border border-white/30">
                  Cloud + Product Engineering
                </div> */}

                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-pill absolute top-8 -left-5 text-xs font-bold"
                >
                  <span className="text-foreground/85">Terraform</span>
                </motion.div>
                <motion.div
                  animate={{ y: [5, -6, 5] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-pill absolute bottom-20 -right-5 text-xs font-bold"
                >
                  <span className="text-foreground/85">CI/CD</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} whileHover={{ y: -4 }} className="glass-card text-center p-4">
              <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-7"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-muted-foreground/50">
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
