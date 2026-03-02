import { useState, useCallback } from "react";
import { Mail, MessageCircle, Phone, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

// static asset import for resume download
import resumePdf from "../assets/resume.pdf";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:iamasiwome@gmail.com?subject=${subject}&body=${body}`;
    },
    [name, email, message]
  );

  const contactCards = [
    { icon: Mail, label: "Email", value: "iamasiwome@gmail.com", href: "mailto:iamasiwome@gmail.com", gradient: "var(--gradient-primary)" },
    { icon: MessageCircle, label: "WhatsApp", value: "+233 545 271 301", href: "https://wa.me/233545271301", gradient: "var(--gradient-accent)", external: true },
    { icon: Phone, label: "Phone", value: "+233 545 271 301", href: "tel:+233545271301", gradient: "var(--gradient-warm)" },
  ];

  return (
    <section id="contact" className="section-padding section-decorated">
      <div className="container-narrow">
        <AnimatedSection>
          <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">Contact</span>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle">Get in touch for collaborations and opportunities</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StaggerContainer className="space-y-4">
            {contactCards.map((card) => (
              <StaggerItem key={card.label}>
                <motion.a
                  whileHover={{ x: 6, scale: 1.02 }}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="glass-card flex items-center gap-4 group block"
                >
                  <div className="icon-box" style={{ background: card.gradient }}>
                    <card.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">{card.label}</p>
                    <p className="text-xs text-muted-foreground">{card.value}</p>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
            <StaggerItem>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={resumePdf}
                download="resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 mt-2 rounded-xl text-sm font-medium text-primary-foreground transition-all hover:shadow-lg"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Download size={16} /> Download Resume
              </motion.a>
            </StaggerItem>
          </StaggerContainer>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-primary" />
                <h3 className="font-bold text-foreground">Send a Message</h3>
              </div>
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground block mb-1.5">Name</label>
                <input id="contact-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                <input id="contact-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground block mb-1.5">Message</label>
                <textarea id="contact-message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-all" placeholder="Your message..." />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full px-4 py-3 rounded-xl text-sm font-medium text-primary-foreground transition-all hover:shadow-lg" style={{ background: "var(--gradient-primary)" }}>
                Send Message
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
