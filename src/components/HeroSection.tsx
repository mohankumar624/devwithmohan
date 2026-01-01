import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero3DScene from "./Hero3DScene";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden"
    >
      {/* 3D Background */}
      <Hero3DScene />
      
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 z-[1]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
            <p className="text-accent font-semibold mb-4 text-lg">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Mohana Kumar
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
              Web Developer | Data Science Enthusiast | AI & ML Practitioner
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
              Passionate about building responsive web applications and intelligent 
              systems using machine learning. Specializing in AI-driven recommendation 
              systems and full-stack development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild className="shadow-lg shadow-primary/25">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="backdrop-blur-sm">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
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

          {/* Stats Cards - Right Side */}
          <div className="hidden lg:flex flex-col items-end gap-6">
            {/* Experience Badge */}
            <div className="bg-card/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-border/50 animate-scale-in">
              <p className="text-4xl font-bold text-primary">3+</p>
              <p className="text-muted-foreground">Years Learning</p>
            </div>
            
            {/* Projects Badge */}
            <div className="bg-card/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-border/50 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-4xl font-bold text-accent">4+</p>
              <p className="text-muted-foreground">Projects Built</p>
            </div>
            
            {/* Technologies Badge */}
            <div className="bg-card/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-border/50 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-4xl font-bold text-purple-500">10+</p>
              <p className="text-muted-foreground">Technologies</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
