import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-200",
    textColor: "text-green-600",
    skills: ["Node.js", "Express.js", "Java", "Servlet"],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Data Science & AI",
    icon: "🤖",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-200",
    textColor: "text-orange-600",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML Algorithms", "Clustering", "Classification"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-200",
    textColor: "text-pink-600",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter", "Figma"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            MY EXPERTISE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning frontend, backend, databases, and 
            cutting-edge AI/ML technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient line at top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />
              
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`${category.bgColor} ${category.textColor} ${category.borderColor} font-medium hover:scale-105 transition-transform cursor-default py-1.5 px-3`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
