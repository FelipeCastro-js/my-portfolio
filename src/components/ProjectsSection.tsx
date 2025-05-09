import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pokedex Website",
    description:
      "A beautiful website using React, Saas and consuming the pokemon endpoint.",
    image: "/projects/project1.jpg",
    tags: ["React", "SaaS"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Daily Nutritional Dashboard",
    description:
      "A Python-based application that uses a pre-trained DenseNet121 model to analyze food images and estimate nutritional values. The interface is built with Gradio to provide an easy and interactive user experience.",
    image: "/projects/project2.jpg",
    tags: ["Python", "Gradio", "DenseNet121"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "The Truman Show - 3D Mobile Game",
    description:
      "A 3-level 3D mobile game developed in Unity using C#. The goal is to collect specific items in each level within a 10-minute time limit to advance. Each level features a different map and challenge: collecting carrots, bread, and chess pieces. If time runs out, the level restarts. The game was designed for mobile platforms as a fun and educational project to practice game development.",
    image: "/projects/project3.jpg",
    tags: ["Unity", "C#", "Game Development"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recen projects. Each projects was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-ws card-hover flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/FelipeCastro-js"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
