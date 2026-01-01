import { motion } from "framer-motion";
import { Code, Brain, Database, Sparkles, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and modern web applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Creating intelligent systems and recommendation engines",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Database Systems",
    description: "Designing efficient database architectures",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Data Science",
    description: "Analyzing data to derive meaningful insights",
    color: "from-orange-500 to-amber-500",
  },
];

const stats = [
  { icon: Zap, value: "4+", label: "Projects Completed" },
  { icon: Code, value: "10+", label: "Technologies" },
  { icon: Users, value: "3+", label: "Years Learning" },
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

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Designing Solutions,<br />
            <span className="text-gradient">Not Just Visuals</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Web Developer</span> and 
              <span className="text-primary font-semibold"> Data Science enthusiast</span> currently 
              pursuing my 3rd Year – 6th Semester in B.Tech Information Technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in <span className="text-foreground font-medium">HTML, CSS, JavaScript, Node.js</span>, 
              and database systems, I focus on building intelligent applications 
              that solve real-world problems through automation and personalization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology has led me to explore the fascinating world 
              of <span className="text-foreground font-medium">AI and Machine Learning</span>, 
              where I develop recommendation systems and apply data-driven approaches 
              to create impactful solutions.
            </p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-4 bg-card rounded-xl border border-border"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
