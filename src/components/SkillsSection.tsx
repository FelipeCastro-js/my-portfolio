import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: "Advanced", category: "frontend" },
  { name: "JavaScript", level: "Advanced", category: "frontend" },
  { name: "TypeScript", level: "Advanced", category: "frontend" },
  { name: "React", level: "Advanced", category: "frontend" },
  { name: "Next.js", level: "Intermediate", category: "frontend" },
  { name: "Tailwind CSS", level: "Advanced", category: "frontend" },
  { name: "Webpack", level: "Intermediate", category: "frontend" },
  { name: "Figma", level: "Advanced", category: "frontend" },

  // Backend
  { name: "Python", level: "Advanced", category: "backend" },
  { name: "FastAPI", level: "Intermediate", category: "backend" },
  { name: "Django", level: "Intermediate", category: "backend" },
  { name: "NestJS", level: "Intermediate", category: "backend" },
  { name: "MongoDB", level: "Intermediate", category: "backend" },
  { name: "PostgreSQL", level: "Intermediate", category: "backend" },
  { name: "MySQL", level: "Intermediate", category: "backend" },
  { name: "API RESTful", level: "Intermediate", category: "backend" },

  // Tools / Others
  { name: "Git / GitHub", level: "Advanced", category: "tools" },
  { name: "Docker", level: "Intermediate", category: "tools" },
  { name: "VS Code", level: "Advanced", category: "tools" },
  { name: "Unity (C#)", level: "Intermediate", category: "tools" },
  { name: "Java (Desktop)", level: "Intermediate", category: "tools" },
  { name: "Kotlin (Android, MVVM)", level: "Intermediate", category: "tools" },
  {
    name: "Computer Vision (YOLO, Roboflow)",
    level: "Basic",
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

function getLevelIcon(level: string) {
  switch (level) {
    case "Basic":
      return "🔰";
    case "Intermediate":
      return "⚙️";
    case "Advanced":
      return "🚀";
    default:
      return "";
  }
}

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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-xl">{getLevelIcon(skill.level)}</span>
              </div>

              <div className="text-right">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
