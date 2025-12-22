import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, Mail, Linkedin, Github, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/data/portfolio-data";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import emailjs from "@emailjs/browser";

export const ContactSection = ({ emailJsConfig }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        emailJsConfig.publicKey
      );

      toast({
        title: "Message sent",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong ❌",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "surya-vikas",
      href: personalInfo.github,
    },
  ];

  return (
    <ScrollReveal direction="up">
      <section id="contact" className="section-padding bg-secondary/30">
        <div className="container-custom" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to connect with fellow developers, potential
              collaborators, or anyone interested in technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold mb-6">
                  Let's Connect
                </h3>

                <div className="space-y-4">
                  {contactLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {link.label}
                        </p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >

                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 md:p-8 space-y-6"
              >
                <h3 className="font-display text-xl font-semibold mb-2">
                  Send a Message
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-secondary/50 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
