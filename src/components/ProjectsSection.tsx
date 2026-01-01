import { motion } from "framer-motion";
import { ExternalLink, Github, Film, ShoppingCart, StickyNote, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CineMatch",
    subtitle: "AI Driven Movie Recommendation System",
    description:
      "Personalized movie recommendation using collaborative filtering, clustering and TMDB API. Built to help users discover movies based on their preferences.",
    technologies: ["Python", "Machine Learning", "TMDB API", "Flutter"],
    icon: Film,
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    title: "Customer Segmentation",
    subtitle: "E-Commerce Analytics",
    description:
      "Data wrangling and customer behavior analysis using clustering algorithms. Enables businesses to understand and target customer segments effectively.",
    technologies: ["Python", "Pandas", "K-Means", "Data Viz"],
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "NoteBox",
    subtitle: "Secure Note Taking Application",
    description:
      "Full-stack application for managing notes with authentication and CRUD features. Provides a secure and organized way to store personal notes.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    icon: StickyNote,
    color: "from-green-500 to-emerald-500",
    featured: false,
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Showcase",
    description:
      "Responsive website to showcase skills, resume and projects. Designed with modern aesthetics and smooth user experience.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    icon: Globe,
    color: "from-orange-500 to-amber-500",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my expertise in web development, 
            AI/ML, and data science.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Project Header */}
              <div className={`h-56 bg-gradient-to-br ${project.color} p-8 flex flex-col justify-between relative overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/80 font-medium">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 flex-1">
                    <Github size={16} />
                    View Code
                  </Button>
                  <Button size="sm" className="gap-2 flex-1">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
