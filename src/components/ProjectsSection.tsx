import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Pokedex Website",
    description:
      "Dynamic website built with React and Sass, consuming the Pokémon API. Practiced endpoint integration and responsive design with a focus on attractive UI.",
    image: "/projects/project1.jpg",
    tags: ["React", "SaaS"],
    demoUrl: "#",
    githubUrl: "https://github.com/FelipeCastro-js/pokedex-react",
  },

  {
    id: 2,
    title: "AI Food Detection & Protein Estimation",
    description:
      "Computer vision system using YOLOv11s, trained on 900+ images. Implemented with Python, Gradio, and Streamlit, strengthening my skills in dataset handling, model training, and deployment.",
    image: "/projects/project2.jpg",
    tags: ["Python", "Gradio", "DenseNet121"],
    demoUrl: "https://detectionimage-wcpavskqznhxfynjh2xzeg.streamlit.app/",
    githubUrl: "https://github.com/FelipeCastro-js/DetectionImage",
  },

  {
    id: 3,
    title: "The Truman Show - 3D Mobile Game",
    description:
      "Mobile game developed in Unity (C#) featuring 3 levels and timed objectives. Educational project to practice game logic, map design, and interactive mechanics.",
    image: "/projects/project3.jpg",
    tags: ["Unity", "C#", "Game Development"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Estatein Landing Page",
    description:
      "Modern landing page built with React and Tailwind CSS, focused on animations and responsive layouts. Key exercise to master Tailwind utilities and smooth visual effects.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "Lucide Icons", "Landing Page"],
    demoUrl: "https://real-estate-chi-ashy.vercel.app/",
    githubUrl:
      "https://github.com/FelipeCastro-js/real-estate?tab=readme-ov-file",
  },

  {
    id: 5,
    title: "Pomodoro Timer App",
    description:
      "Mobile app developed in React Native with automatic Pomodoro cycles, short/long breaks, and audio alerts using Expo Audio. Reinforced my skills in state management and mobile UI design.",
    image: "/projects/project5.png",
    tags: ["React Native", "Typescript", "Expo Audio", "Mobile UI"],
    demoUrl: "#",
    githubUrl: "https://github.com/FelipeCastro-js/time-management",
  },

  {
    id: 6,
    title: "Mortgage Calculator App",
    description:
      "Mortgage calculator (Frontend Mentor challenge) built with React and Tailwind. Allows users to input amount, term, and interest rate, displaying real-time payments. Helped me improve form handling, business logic, and accessibility.",
    image: "/projects/project6.png",
    tags: ["React", "Tailwind CSS", "Frontend Mentor", "Responsive UI"],
    demoUrl: "https://hipo-smart.vercel.app/",
    githubUrl:
      "https://github.com/FelipeCastro-js/HipoSmart?tab=readme-ov-file",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recen projects. Each projects was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.2 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 max-h-28 overflow-y-auto no-scrollbar">
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
            </motion.div>
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
