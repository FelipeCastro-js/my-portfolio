import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export const experiences = [
  {
    role: "Software Development Intern",
    company: "Habi CO",
    period: "2023 - 2024",
    description:
      "Supported internal automation projects using Python to streamline operational workflows. Collaborated on technical documentation of data pipelines and integrated tools like Pipefy and Mantiz, improving process visibility and efficiency across the team.",
    icon: "/projects/habi1.jpeg",
  },

  {
    role: "Junior Developer",
    company: "Habi CO",
    period: "2024 - 2025",
    description:
      "Contributed to both frontend and backend development using React, Next.js, and FastAPI. Worked on building scalable interfaces, integrating APIs, and deploying solutions on AWS. Focused on improving automation and optimizing workflows through clean, efficient code and cross-team collaboration.",
    icon: "/projects/habi1.jpeg",
  },

  {
    role: "Freelance Full Stack Developer",
    company: "Independent",
    period: "2025 - Present",
    description:
      "Providing full stack solutions for small businesses and personal projects, combining React and Next.js on the frontend with Python and FastAPI on the backend. Managing deployments, performance tuning, and maintaining a high standard of code quality and user experience.",
    icon: "/projects/programmer.png",
  },
];
