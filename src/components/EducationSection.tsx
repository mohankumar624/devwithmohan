import { GraduationCap, Award, Target, BookOpen } from "lucide-react";

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

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">BACKGROUND</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Achievements
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-foreground">
                  B.Tech – Information Technology
                </h4>
                <p className="text-lg text-primary font-medium">
                  Information Technology
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    3rd Year
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    6th Semester
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Focused on Web Development, Data Science, AI & Machine Learning. 
                  Building a strong foundation in both theoretical concepts and 
                  practical applications.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Award className="text-accent" size={20} />
              </div>
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <achievement.icon className="text-primary" size={20} />
                  </div>
                  <p className="text-foreground font-medium">{achievement.text}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
