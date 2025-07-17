import { Briefcase, Code, Server } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Developer</h3>
            <p className="text-muted-foreground">
              With over a year and a half of experience in software development,
              I’ve contributed to both front-end and back-end systems, building
              scalable, maintainable, and efficient web applications.
            </p>
            <p className="text-muted-foreground">
              I enjoy solving complex problems through clean code, scalable
              architecture, and continuous learning. I'm always exploring new
              tools and best practices to improve as a developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/cv/Hoja de vida – Carlos Felipe Castro Benavides.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover hover:shadow-lg hover:scale-105 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, scalable web applications with modern
                    frameworks and clean architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover hover:shadow-lg hover:scale-105 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Designing reliable APIs and systems focused on performance,
                    security, and scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover hover:shadow-lg hover:scale-105 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Project Collaboration
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in team environments, delivering high-quality
                    code through collaboration, agile practices, and clear
                    communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
