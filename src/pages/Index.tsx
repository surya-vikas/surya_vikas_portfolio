import TypewriterEffect from "@/components/TypewriterEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card rounded-none border-l-0 border-r-0 border-t-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-glow">Surya Vikas</div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#hero"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-primary transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors duration-300"
              >
                Projects
              </a>

              <a
                href="#resume"
                className="hover:text-primary transition-colors duration-300"
              >
                Certifications
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative px-6"
      >
        <div className="text-center space-y-8 animate-slide-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-glow">
              Surya Vikas
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary text-glow-secondary">
              I AM A <TypewriterEffect />
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about learning and building web projects that make a
              difference
            </p>
          </div>
          <div className="space-y-6">
            <a href="#projects" className="neon-button inline-block">
              View My Work
            </a>
            <div className="flex justify-center space-x-6">
              <a
                href="#contact"
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card animate-slide-in-left">
            <h2 className="text-4xl font-bold mb-8 text-center text-glow">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Hi! I'm Surya Vikas, a dedicated student with a strong
                  interest in web development and technology. I’m currently
                  learning full stack development, starting with HTML, CSS, and
                  JavaScript, and gradually diving into frameworks like React
                  and tools like Git and GitHub. I’m also beginning to explore
                  backend development to build complete, end-to-end web
                  applications. I enjoy the creative process of building
                  websites - from designing user interfaces to writing clean,
                  functional code. Whether it’s a small personal project or a
                  group assignment, I always bring a thoughtful, problem-solving
                  mindset and a passion for continuous learning and innovation
                  to my work. I also won 1st prize in the Hack-IT-ON Hackathon,
                  which further strengthened my teamwork, creativity, and
                  practical coding skills.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="skill-badge">JavaScript</span>
                  <span className="skill-badge">Java</span>
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">Python</span>
                  <span className="skill-badge">Php</span>
                  <span className="skill-badge">VS code</span>
                  <span className="skill-badge">HTML/CSS</span>
                  <span className="skill-badge">Git</span>
                  <span className="skill-badge">SQL</span>
                  <span className="skill-badge">DSA</span>
                  <span className="skill-badge">OOP's </span>
                  <span className="skill-badge">ATOM</span>
                  <span className="skill-badge">Live Server</span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-accent">
                    Academic Timeline
                  </h4>
                  <div className="space-y-3">
                    <div className="glass rounded-lg p-4">
                      <h5 className="font-semibold text-primary">
                        2023 - present
                      </h5>
                      <p>Bachelor of Technology in Information Technology</p>
                      <p className="text-sm text-muted-foreground">
                        GPA: 9.12/10
                      </p>
                    </div>
                    <div className="glass rounded-lg p-4">
                      <h5 className="font-semibold text-primary">
                        2021 - 2023
                      </h5>
                      <p>Sri chaitanya junior college - MPC</p>
                      <p className="text-sm text-muted-foreground">
                        GPA: 9.54/10
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-glow animate-slide-in-up">
            Featured Projects
          </h2>
          <div className="project-grid">
            {/* Project 1 */}
            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/project1.png"
                  alt="Barcode Generator"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Feed The Need
              </h3>
              <p className="text-muted-foreground mb-4">
                Feed The Need is a PHP-based web application that connects food
                donors, NGOs, and delivery volunteers to reduce food waste. It
                enables donors to share surplus food, NGOs to manage
                distributions, and delivery agents to handle pickups -{" "}
                <b>1st prize in HACK-IT-ON</b>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-badge text-xs">HTML</span>
                <span className="skill-badge text-xs">CSS</span>
                <span className="skill-badge text-xs">Java Script</span>
                <span className="skill-badge text-xs">Php</span>
                <span className="skill-badge text-xs">My SQL</span>
                <span className="skill-badge text-xs">python</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="http://feed-the-need.infinityfreeapp.com/"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/surya-vikas/feed_the_need"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/project5.png"
                  alt="Barcode Generator"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Feed The Need
              </h3>
              <p className="text-muted-foreground mb-4">
                Civil Services Aspirants Club (CSAC), SNIST is a vibrant
                student-run initiative based at Sreenidhi Institute of Science &
                Technology, dedicated to empowering students aiming for civil
                services. The club offers guidance, peer-support, discussion
                forums.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-badge text-xs">HTML</span>
                <span className="skill-badge text-xs">CSS</span>
                <span className="skill-badge text-xs">Java Script</span>
                <span className="skill-badge text-xs">React</span>
                <span className="skill-badge text-xs">My SQL</span>
                <span className="skill-badge text-xs">python</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://csac-snist.onrender.com/"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/civil-services-aspirants-club/CSAC-WEBSITE"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/project2.png"
                  alt="Barcode Generator"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Barcode Generator
              </h3>
              <p className="text-muted-foreground mb-4">
                Built a user-friendly web platform enabling online food
                ordering, real-time tracking, secure digital payments, and
                instant notifications — streamlining operations, reducing wait
                times, and improving overall efficiency and convenience for both
                students and canteen staff.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-badge text-xs">HTML</span>
                <span className="skill-badge text-xs">CSS</span>
                <span className="skill-badge text-xs">Java Script</span>
                <span className="skill-badge text-xs">Js barcode</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://surya-vikas.github.io/barcode-genrator/"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/surya-vikas/barcode-genrator"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/project3.png"
                  alt="Clash of Keys"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Clash of Keys
              </h3>
              <p className="text-muted-foreground mb-4">
                Developed an engaging typing speed game using HTML, CSS, and
                JavaScript to help users improve typing accuracy and speed. The
                game provides real-time feedback, dynamic scoring, and an
                interactive UI, making practice sessions fun, responsive, and
                visually appealing across all devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-badge text-xs">HTML</span>
                <span className="skill-badge text-xs">CSS</span>
                <span className="skill-badge text-xs">JavaScript</span>
                <span className="skill-badge text-xs">React</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://surya-vikas.github.io/clash-of-keys/"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/surya-vikas/clash-of-keys"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/project4.png"
                  alt="Arogya sreenidhi"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Arogya sreenidhi
              </h3>
              <p className="text-muted-foreground mb-4">
                Built a user-friendly web platform enabling online food
                ordering, real-time tracking, secure digital payments, and
                instant notifications - streamlining operations, reducing wait
                times, and improving overall efficiency and convenience for both
                students and canteen staff.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-badge text-xs">Figma</span>
                <span className="skill-badge text-xs">Canva</span>
                <span className="skill-badge text-xs">React</span>
                <span className="skill-badge text-xs">Java Script</span>
                <span className="skill-badge text-xs">Poster my wall</span>
              </div>
            </div>

            {/* Project 4 - Design Project */}
            <div className="glass-card animate-slide-in-up">
              <div className="h-48 glass rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=300&fit=crop"
                  alt="Creative Portfolio"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">
                Designing Posters
              </h3>
              <p className="text-muted-foreground mb-4">
                Created and designed over 100 visually compelling posters and
                banners for diverse applications, including marketing campaigns,
                event promotions, and digital platforms, ensuring brand
                consistency and audience engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="skill-badge text-xs">Figma</span>
                <span className="skill-badge text-xs">Canva</span>
                <span className="skill-badge text-xs">Photoshop</span>
                <span className="skill-badge text-xs">UI/UX</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://drive.google.com/drive/folders/1cUVu2f8aIC1avV33dzWQBISYFh2l9enz?usp=sharing"
                  className="text-primary hover:text-secondary transition-colors duration-300"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card animate-slide-in-up">
            <h2 className="text-4xl font-bold mb-8 text-center text-glow">
              Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">
                    Oracle Certified Professional
                  </h4>
                  <p className="text-muted-foreground">Oracle</p>
                  <p className="text-sm text-accent">September - 2025</p>
                </div>

                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">
                    Full Stack Web Development
                  </h4>
                  <p className="text-muted-foreground">EduSkills</p>
                  <p className="text-sm text-accent">July - 2025</p>
                </div>

                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">CSS</h4>
                  <p className="text-muted-foreground">Simplilearn</p>
                  <p className="text-sm text-accent">April - 2025</p>
                </div>

                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">
                    Language Efficiency Certificate
                  </h4>
                  <p className="text-muted-foreground">EF SET</p>
                  <p className="text-sm text-accent">May - 2024</p>
                </div>

                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">C Programming</h4>
                  <p className="text-muted-foreground">CodeTantra</p>
                  <p className="text-sm text-accent">April - 2024</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">HTML</h4>
                  <p className="text-muted-foreground">Simplilearn</p>
                  <p className="text-sm text-accent">April - 2025</p>
                </div>

                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">AI Tools Expert</h4>
                  <p className="text-muted-foreground">Be10x</p>
                  <p className="text-sm text-accent">May - 2025</p>
                </div>

                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">Master SQL</h4>
                  <p className="text-muted-foreground">AiForTechies</p>
                  <p className="text-sm text-accent">August - 2025</p>
                </div>

                <div className="glass rounded-lg p-4">
                  <h4 className="font-bold text-primary">JavaScript</h4>
                  <p className="text-muted-foreground">Simplilearn</p>
                  <p className="text-sm text-accent">August - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card animate-slide-in-up">
            <h2 className="text-4xl font-bold mb-8 text-center text-glow">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT SIDE */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-secondary">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground">
                  I'm always excited to connect with fellow developers,
                  potential collaborators, or anyone interested in technology.
                  Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary text-xl">📧</div>
                    <span>suryavikas1223@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-primary text-xl">🔗</div>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors duration-300"
                    >
                      linkedin.com/in/surya-vikas-thipirishetty
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-primary text-xl">🐙</div>
                    <a
                      href="#"
                      className="text-primary hover:text-secondary transition-colors duration-300"
                    >
                      github.com/surya-vikas
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - IMAGE */}
              <div className="flex justify-center">
                <img
                  src="qrcontact.png"
                  alt="Image not Available"
                  className="max-w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t glass-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-8">
              <a
                href="#"
                className="text-primary hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl"></span>
              </a>
              <a
                href="#"
                className="text-primary hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl"></span>
              </a>
              <a
                href="#"
                className="text-primary hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl"></span>
              </a>
              <a
                href="#"
                className="text-primary hover:text-secondary transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl"></span>
              </a>
            </div>
            <p className="text-muted-foreground">
              © 2025 Surya Vikas. Your next collaborator in innovation
            </p>
            <p className="text-sm text-accent">Copy rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;
