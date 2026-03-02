import { Github, Linkedin, Globe, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        © {new Date().getFullYear()} <span className="font-bold gradient-text">Asiwome Boateng</span>. Built in Ghana.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/Asiwomex" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
        <a href="https://asiwomex.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Globe size={18} /></a>
        <a href="mailto:iamasiwome@gmail.com" className="text-muted-foreground hover:text-rose transition-colors"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
