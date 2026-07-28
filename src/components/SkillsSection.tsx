import { useState } from "react";
import { cn } from "../lib/utils";
import {
  SiHtml5,
  SiCss,
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
  SiNodedotjs,
  SiSqlalchemy,
  SiMercadopago,
  SiPytest,
  SiGithubactions,
  SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
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
    icon: <SiCss className="text-blue-500" />,
    category: "frontend",
  },
  {
    name: "JAVASCRIPT",
    icon: <SiJavascript className="text-yellow-400" />,
    category: "frontend",
  },
  {
    name: "TYPESCRIPT",
    icon: <SiTypescript className="text-blue-600" />,
    category: "frontend",
  },
  {
    name: "REACT",
    icon: <SiReact className="text-cyan-400" />,
    category: "frontend",
  },
  {
    name: "REACT NATIVE",
    icon: <FaReact className="text-cyan-400" />,
    category: "frontend",
  },
  {
    name: "NEXT.JS",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    category: "frontend",
  },
  {
    name: "TAILWIND CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    category: "frontend",
  },
  {
    name: "WEBPACK",
    icon: <SiWebpack className="text-blue-400" />,
    category: "frontend",
  },
  {
    name: "FIGMA",
    icon: <SiFigma className="text-pink-500" />,
    category: "frontend",
  },

  // Backend
  {
    name: "PYTHON",
    icon: <SiPython className="text-yellow-500" />,
    category: "backend",
  },
  {
    name: "NODE.JS",
    icon: <SiNodedotjs className="text-green-500" />,
    category: "backend",
  },
  {
    name: "FASTAPI",
    icon: <SiFastapi className="text-emerald-500" />,
    category: "backend",
  },
  {
    name: "NESTJS",
    icon: <SiNestjs className="text-red-500" />,
    category: "backend",
  },
  {
    name: "DJANGO",
    icon: <SiDjango className="text-green-700" />,
    category: "backend",
  },
  {
    name: "SQLALCHEMY",
    icon: <SiSqlalchemy className="text-red-400" />,
    category: "backend",
  },
  {
    name: "POSTMAN",
    icon: <SiPostman className="text-orange-500" />,
    category: "backend",
  },
  {
    name: "POSTGRESQL",
    icon: <SiPostgresql className="text-blue-700" />,
    category: "backend",
  },
  {
    name: "MYSQL",
    icon: <SiMysql className="text-blue-500" />,
    category: "backend",
  },
  {
    name: "MONGODB",
    icon: <SiMongodb className="text-green-600" />,
    category: "backend",
  },

  // Tools & Integrations
  {
    name: "MERCADO PAGO API",
    icon: <SiMercadopago className="text-sky-400" />,
    category: "tools",
  },
  {
    name: "AWS CLOUD",
    icon: <FaAws className="text-amber-500" />,
    category: "tools",
  },
  {
    name: "CI/CD",
    icon: <SiGithubactions className="text-blue-500" />,
    category: "tools",
  },
  {
    name: "TESTING (PYTEST)",
    icon: <SiPytest className="text-yellow-400" />,
    category: "tools",
  },
  {
    name: "DOCKER",
    icon: <SiDocker className="text-blue-500" />,
    category: "tools",
  },
  {
    name: "GIT",
    icon: <SiGit className="text-orange-600" />,
    category: "tools",
  },
  {
    name: "GITHUB",
    icon: <SiGithub className="text-gray-800 dark:text-white" />,
    category: "tools",
  },
  {
    name: "UNITY (C#)",
    icon: <SiUnity className="text-gray-700 dark:text-gray-300" />,
    category: "tools",
  },
  {
    name: "JAVA",
    icon: <FaJava className="text-red-600" />,
    category: "tools",
  },
  {
    name: "KOTLIN",
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
                "px-5 py-2 rounded-full transition-all duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                  : "bg-secondary/70 text-foreground hover:bg-secondary border border-border/40"
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
              className="bg-card p-6 rounded-xl border border-border/60 shadow-xs transform transition-all duration-300 hover:scale-105 hover:border-primary/40 flex items-center gap-4 group"
            >
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </span>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
