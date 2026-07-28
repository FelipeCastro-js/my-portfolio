import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tags: string[];
  icon: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "consultant-independent",
    role: "Tech Consultant & Software Engineer",
    company: "Independent",
    period: "05/2026 – Present",
    location: "Bogotá, Colombia",
    type: "Freelance & Consulting",
    icon: "/projects/programmer.png",
    bullets: [
      "Designed and deployed an API-based integration between a Honda dealership’s internal inventory/sales systems and the Siigo ERP, fully automating electronic invoicing and eliminating manual data entry.",
      "Developed real-time executive dashboards to monitor sales, inventory, and operational KPIs, providing centralized business intelligence for faster decision-making.",
      "Integrated an AI conversational chatbot into a high-converting React and Tailwind CSS landing page, streamlining initial customer inquiries and reducing response times.",
      "Led digital transformation initiatives focusing on process automation (BPA), API integrations, and overall workflow optimization.",
    ],
    tags: [
      "Siigo ERP",
      "API Integration",
      "Executive Dashboards",
      "AI Chatbot",
      "React",
      "Tailwind CSS",
      "BPA",
    ],
  },
  {
    id: "golden-fullstack",
    role: "Full Stack Software Engineer",
    company: "Papelería Golden",
    period: "05/2025 – 05/2026",
    location: "Bogotá, Colombia",
    type: "Full-Time",
    icon: "/projects/papeleria.png",
    bullets: [
      "Spearheaded the end-to-end design and development of a Full Stack web platform to centralize business services, automate operational processes, and scale digital presence.",
      "Engineered an AI chatbot to automate printing and photocopy order processing, cutting customer wait times by up to 70% during peak hours.",
      "Implemented administrative web modules for managing client records, service orders, and internal workflows with modular Clean Architecture principles.",
    ],
    tags: [
      "Full Stack",
      "AI Chatbot",
      "Clean Architecture",
      "React",
      "Node.js",
      "Process Automation",
    ],
  },
  {
    id: "habi-swe",
    role: "Software Engineer",
    company: "Habi",
    period: "06/2023 – 05/2025",
    location: "Bogotá, Colombia",
    type: "Full-Time",
    icon: "/projects/habi1.jpeg",
    bullets: [
      "Engineered and integrated the Mercado Pago payment gateway across LATAM operations using NestJS and SQL databases, ensuring secure, traceably logged, and reliable transactions.",
      "Developed high-throughput backend services using FastAPI and SQLAlchemy to process complex real estate financial calculations, drastically optimizing database query execution and handling large data volumes.",
      "Built modern internal financial dashboards using React and TypeScript, improving core application stability and internal team productivity.",
      "Automated legal contract generation via dynamic HTML templates integrated with e-signature services, reducing human operational errors and legal turnaround times.",
      "Implemented automated test suites using Test-Driven Development (TDD) within Scrum/Agile sprints, increasing code coverage and strengthening CI/CD deployment pipelines.",
    ],
    tags: [
      "NestJS",
      "FastAPI",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "Mercado Pago",
      "TDD",
      "CI/CD",
    ],
  },
];
