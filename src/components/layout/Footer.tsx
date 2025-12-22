import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio-data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-xl font-bold text-gradient">
              {personalInfo.name}
            </a>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs">
              B.Tech Student & Aspiring Full Stack Developer passionate about building impactful web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
          </p>
        </div>
      </div>
    </footer>
  );
};
