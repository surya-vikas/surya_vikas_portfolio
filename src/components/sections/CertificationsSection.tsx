import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio-data";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ScrollReveal direction="up">
      <section id="certifications" className="section-padding">
        <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
            Achievements
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span> & Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-4 hover:border-primary/30 transition-all duration-300 cursor-pointer group text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-xs">{cert.issuer}</p>
              <p className="text-primary/70 text-xs mt-1">{cert.date}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
