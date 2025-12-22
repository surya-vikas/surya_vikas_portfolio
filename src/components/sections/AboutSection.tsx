import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy, Code, Sparkles } from "lucide-react";
import { personalInfo, education } from "@/data/portfolio-data";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Trophy, label: "Hack IT On", value: "First Place" },
    { icon: GraduationCap, label: "GPA", value: "9.12/10"},
    { icon: Code, label: "Projects", value: "10+"},
    { icon: Sparkles, label: "Current Stage", value: "Undergraduate" }
  ];

  return (
    <ScrollReveal>
      <section id="about" className="section-padding bg-secondary/20">
        <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
            Get To Know Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>



        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                My Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {personalInfo.bio}
              </p>

            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="relative pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-primary">{edu.period}</span>
                    <h4 className="font-medium text-sm mt-1">{edu.degree}</h4>
                    <p className="text-muted-foreground text-xs">{edu.institution}</p>
                    <p className="text-primary font-semibold text-sm mt-1">GPA: {edu.gpa}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
                {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 mb-12"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary/70 flex items-center justify-center shadow-lg">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-gradient">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
};
