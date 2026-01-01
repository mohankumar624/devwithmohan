import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohanhouse807@gmail.com",
    href: "mailto:mohanhouse807@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8015800996",
    href: "tel:+918015800996",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
    color: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mohankumar624",
    color: "hover:bg-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohan-kumar-0b2",
    color: "hover:bg-blue-600",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-4 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-semibold hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {item.value}
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-foreground font-semibold">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center ${link.color} hover:text-white hover:border-transparent transition-all duration-300 shadow-lg`}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Send a Message
              </h3>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <Input 
                      placeholder="Your name" 
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can I help you?" 
                    className="h-12 rounded-xl border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="rounded-xl border-border focus:border-primary resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="w-full h-14 rounded-xl text-base gap-2 shadow-lg shadow-primary/25">
                    <Send size={20} />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
