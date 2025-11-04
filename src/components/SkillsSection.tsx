import { useState } from "react";
import { cn } from "../lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiWebpack,
  SiFigma,
  SiPython,
  SiFastapi,
  SiDjango,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiUnity,
  SiKotlin,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

const skills = [
  // Frontend
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500" />,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-blue-500" />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    category: "frontend",
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-400" />,
    category: "frontend",
  },
  {
    name: "React Native",
    icon: <FaReact className="text-cyan-400" />,
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    category: "frontend",
  },
  {
    name: "Webpack",
    icon: <SiWebpack className="text-blue-400" />,
    category: "frontend",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500" />,
    category: "frontend",
  },

  // Backend
  {
    name: "Python",
    icon: <SiPython className="text-yellow-500" />,
    category: "backend",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi className="text-green-500" />,
    category: "backend",
  },
  {
    name: "Django",
    icon: <SiDjango className="text-green-700" />,
    category: "backend",
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="text-red-500" />,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-700" />,
    category: "backend",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-500" />,
    category: "backend",
  },

  // Tools / Others
  {
    name: "Git",
    icon: <SiGit className="text-orange-600" />,
    category: "tools",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-gray-800 dark:text-white" />,
    category: "tools",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />,
    category: "tools",
  },
  {
    name: "Unity (C#)",
    icon: <SiUnity className="text-gray-700" />,
    category: "tools",
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-600" />,
    category: "tools",
  },
  {
    name: "Kotlin",
    icon: <SiKotlin className="text-purple-500" />,
    category: "tools",
  },
];
const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Botones de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs transform transition-transform duration-300 hover:scale-105 flex items-center gap-4"
            >
              <span className="text-4xl">{skill.icon}</span>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
