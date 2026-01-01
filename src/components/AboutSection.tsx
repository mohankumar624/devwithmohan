import { Code, Brain, Database, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and modern web applications",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Creating intelligent systems and recommendation engines",
  },
  {
    icon: Database,
    title: "Database Systems",
    description: "Designing efficient database architectures",
  },
  {
    icon: Sparkles,
    title: "Data Science",
    description: "Analyzing data to derive meaningful insights",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Designing Solutions, Not Just Visuals
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Web Developer and Data Science enthusiast currently 
              pursuing my <span className="text-primary font-medium">2nd Year – 4th Semester</span> in 
              Web Essentials. I love creating digital experiences that are both 
              functional and visually appealing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in <span className="text-primary font-medium">HTML, CSS, JavaScript, Node.js</span>, 
              and database systems, I focus on building intelligent applications 
              that solve real-world problems through automation and personalization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology has led me to explore the fascinating world 
              of <span className="text-primary font-medium">AI and Machine Learning</span>, 
              where I develop recommendation systems and apply data-driven approaches 
              to create impactful solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
