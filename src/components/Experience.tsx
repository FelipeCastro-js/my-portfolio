import { motion } from "framer-motion";

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceProps[] = [
  {
    role: "Software Development Intern",
    company: "Habi CO",
    period: "2023 - 2024",
    description:
      "Supported internal automation projects using Python to streamline operational workflows. Collaborated on technical documentation of data pipelines and integrated tools like Pipefy and Mantiz, improving process visibility and efficiency across the team.",
  },

  {
    role: "Junior Developer",
    company: "Habi CO",
    period: "2024 - 2025",
    description:
      "Contributed to both frontend and backend development using React, Next.js, and FastAPI. Worked on building scalable interfaces, integrating APIs, and deploying solutions on AWS. Focused on improving automation and optimizing workflows through clean, efficient code and cross-team collaboration.",
  },

  {
    role: "Freelance Full Stack Developer",
    company: "Independent",
    period: "2025 - Present",
    description:
      "Providing full stack solutions for small businesses and personal projects, combining React and Next.js on the frontend with Python and FastAPI on the backend. Managing deployments, performance tuning, and maintaining a high standard of code quality and user experience.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* Timeline wrapper */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex-1 mb-12 lg:mb-0 lg:px-6"
            >
              <div className="flex justify-center lg:justify-start mb-4">
                <span className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-primary"></span>
                </span>
              </div>

              {/* Card */}
              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
                  {exp.company} • {exp.period}
                </span>
                <p className="text-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="absolute top-3 left-[14px] w-[2px] h-full bg-primary/30 lg:hidden"></div>
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] bg-primary/30"></div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
