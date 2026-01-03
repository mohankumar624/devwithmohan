import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home">
      <AnimatedShaderHero
        trustBadge={{
          text: "Available for opportunities",
          icons: ["🚀", "💼", "✨"]
        }}
        headline={{
          line1: "Hi, I'm Mohan Kumar",
          line2: "Web Developer & AI Enthusiast"
        }}
        subtitle="Passionate about building responsive web applications and intelligent systems using machine learning. Specializing in AI-driven recommendation systems and full-stack development."
        buttons={{
          primary: {
            text: "View Projects",
            onClick: scrollToProjects
          },
          secondary: {
            text: "Contact Me",
            onClick: scrollToContact
          }
        }}
      >
        {/* Social Links & Resume */}
        <div className="animate-fade-in-up animation-delay-800 flex flex-wrap items-center gap-4 mt-8">
          <Button asChild variant="outline" className="gap-2">
            <a href="/resume.pdf" download="Mohan_Kumar_Resume.pdf">
              <Download size={18} />
              Download Resume
            </a>
          </Button>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-sm">Follow me:</span>
            <a
              href="https://github.com/mohankumar624"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-kumar-0b2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mohanhouse807@gmail.com"
              className="p-2 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="animate-fade-in-up animation-delay-800 flex flex-wrap gap-6 mt-10">
          <div className="bg-card/60 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-border/50">
            <p className="text-3xl font-bold text-primary">3+</p>
            <p className="text-muted-foreground text-sm">Years Learning</p>
          </div>
          <div className="bg-card/60 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-border/50">
            <p className="text-3xl font-bold text-accent">4+</p>
            <p className="text-muted-foreground text-sm">Projects Built</p>
          </div>
          <div className="bg-card/60 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-border/50">
            <p className="text-3xl font-bold text-purple-500">10+</p>
            <p className="text-muted-foreground text-sm">Technologies</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </AnimatedShaderHero>
    </section>
  );
};

export default HeroSection;
