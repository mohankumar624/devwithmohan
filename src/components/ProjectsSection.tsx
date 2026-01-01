import { ExternalLink, Github, Film, ShoppingCart, StickyNote, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CineMatch – AI Driven Movie Recommendation System",
    description:
      "Personalized movie recommendation using collaborative filtering, clustering and TMDB API. Built to help users discover movies based on their preferences.",
    technologies: ["Python", "Machine Learning", "TMDB API", "Flutter / React Native"],
    icon: Film,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Customer Segmentation for E-Commerce",
    description:
      "Data wrangling and customer behavior analysis using clustering algorithms. Enables businesses to understand and target customer segments effectively.",
    technologies: ["Python", "Pandas", "K-Means", "Data Visualization"],
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "NoteBox – Secure Note Taking Application",
    description:
      "Full-stack application for managing notes with authentication and CRUD features. Provides a secure and organized way to store personal notes.",
    technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    icon: StickyNote,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive website to showcase skills, resume and projects. Designed with modern aesthetics and smooth user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    color: "from-orange-500 to-amber-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in web development, 
            AI/ML, and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <project.icon className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
