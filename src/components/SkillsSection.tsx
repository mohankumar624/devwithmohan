import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React (Basics)"],
  },
  {
    title: "Backend",
    color: "bg-green-500/10 text-green-600 border-green-200",
    skills: ["Node.js", "Express.js", "Java", "Servlet Programming"],
  },
  {
    title: "Database",
    color: "bg-purple-500/10 text-purple-600 border-purple-200",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Data Science & AI",
    color: "bg-orange-500/10 text-orange-600 border-orange-200",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Clustering",
      "Classification",
      "Regression",
    ],
  },
  {
    title: "Tools",
    color: "bg-pink-500/10 text-pink-600 border-pink-200",
    skills: ["Git & GitHub", "VS Code", "Postman", "Jupyter Notebook", "Figma"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, databases, and 
            cutting-edge AI/ML technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${category.color.split(" ")[0].replace("/10", "")}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`${category.color} font-medium hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
