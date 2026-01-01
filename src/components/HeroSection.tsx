import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 bg-gradient-to-br from-secondary/50 via-background to-primary/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
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
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohan-kumar-0b2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mohanhouse807@gmail.com"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="text-6xl md:text-8xl font-bold text-gradient">
                    MK
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -right-4 top-1/4 bg-card shadow-lg rounded-xl p-4 border border-border animate-scale-in">
                <p className="text-2xl font-bold text-primary">2+</p>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </div>
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
