import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const filters = [
  { key: "all", label: "All" },
  { key: "react", label: "React" },
  { key: "fullstack", label: "Full Stack" },
  { key: "web", label: "Web" },
  { key: "design", label: "Design" },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <ScrollReveal direction="up">
      <section id="projects" className="section-padding">
        <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work, from hackathon winners to personal experiments
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.key)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`group relative glass rounded-2xl overflow-hidden hover:glow transition-all ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="h-3 w-3" />
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
{/* Tech Stack */}
<div className="flex flex-wrap gap-2 mb-4">
  {project.tech.map((tech) => (
    <span
      key={tech}
      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
    >
      {tech}
    </span>
  ))}
</div>


                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button variant="gradient" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
};
