import { useState, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blogs" },
  { label: "Publications", href: "#publications" },
  { label: "Certifications", href: "#certifications" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      if (clicking) return;
      setClicking(true);
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setTimeout(() => setClicking(false), 500);
    },
    [clicking],
  );

  return (
    <header className="fixed top-3 md:top-5 left-0 right-0 z-50 px-3 md:px-6">
      <div
        className={`container-narrow rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-panel shadow-xl"
            : "border border-white/50 bg-background/65 backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#" className="text-lg md:text-xl font-extrabold tracking-tight">
            <span className="gradient-text">Asiwome</span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className={`px-3 py-2 text-sm font-semibold rounded-xl transition-all ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-gradient-to-r from-primary/20 to-violet/20 border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.05] border border-transparent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-foreground rounded-xl hover:bg-foreground/[0.05] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24 }}
              className="md:hidden border-t border-primary/20 px-3 pb-3 overflow-hidden bg-background/85 backdrop-blur-xl"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`block px-4 py-3 mt-1 text-sm font-semibold rounded-xl transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/12"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.05]"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
