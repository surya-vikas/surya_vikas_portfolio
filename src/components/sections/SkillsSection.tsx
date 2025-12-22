import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Server, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const skillCategories = [
  { 
    key: "languages", 
    title: "Programming Languages", 
    icon: Code, 
    skills: ["JavaScript", "Java", "Python", "C", "PHP", "SQL"],
    gradient: "from-blue-500 to-cyan-400"
  },
  { 
    key: "frontend", 
    title: "Frontend Technologies", 
    icon: Globe, 
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
    gradient: "from-emerald-500 to-teal-400"
  },
  { 
    key: "backend", 
    title: "Backend & Databases", 
    icon: Server, 
    skills: ["Node.js", "REST APIs", "MySQL", "AWS"],
    gradient: "from-violet-500 to-purple-400"
  },
  { 
    key: "tools", 
    title: "Developer Tools", 
    icon: Wrench, 
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
    gradient: "from-orange-500 to-amber-400"
  },
];


export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ScrollReveal direction="up">
      <section id="skills" className="section-padding">
        <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
            What I Work With
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.skills.length} technologies</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
