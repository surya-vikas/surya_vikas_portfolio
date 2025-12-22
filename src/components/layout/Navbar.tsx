import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, personalInfo } from "@/data/portfolio-data";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="font-display text-xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          {personalInfo.name}
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ y: -2 }}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          

          <Button
            variant="gradient"
            size="sm"
            className="hidden sm:flex"
            asChild
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Get In Touch
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <Button variant="gradient" className="mt-2" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
