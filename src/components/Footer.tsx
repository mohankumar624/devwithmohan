import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">MK</span>
            <span className="text-xl text-accent">.</span>
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Mohana Kumar. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> in India
          </p>

          <nav className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
