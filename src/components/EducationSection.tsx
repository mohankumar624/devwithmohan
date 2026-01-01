import { motion } from "framer-motion";
import { GraduationCap, Award, Target, BookOpen, Trophy, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Award,
    text: "Completed multiple academic projects on AI & Machine Learning",
  },
  {
    icon: Target,
    text: "Built recommendation systems and intelligent applications",
  },
  {
    icon: BookOpen,
    text: "Actively preparing for DBMS, Web Development and AI technical exams",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            BACKGROUND
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 rounded-3xl border border-primary/20 relative overflow-hidden h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg"
                  >
                    <GraduationCap className="text-white" size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Education</h3>
                    <p className="text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      B.Tech – Information Technology
                    </h4>
                    <p className="text-lg text-primary font-medium mb-4">
                      Information Technology
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-accent to-orange-400 text-white rounded-full text-sm font-semibold shadow-lg">
                      3rd Year
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-primary to-blue-400 text-white rounded-full text-sm font-semibold shadow-lg">
                      6th Semester
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    Focused on Web Development, Data Science, AI & Machine Learning. 
                    Building a strong foundation in both theoretical concepts and 
                    practical applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card p-8 rounded-3xl border border-border h-full">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center shadow-lg"
                >
                  <Trophy className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground">Achievements</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="text-primary" size={22} />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">{achievement.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                {[
                  { value: "4+", label: "Projects", icon: Rocket },
                  { value: "10+", label: "Technologies", icon: Target },
                  { value: "3+", label: "Years Learning", icon: BookOpen },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
