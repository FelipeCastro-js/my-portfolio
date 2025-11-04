import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../lib/utils";

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "transparent",
      boxShadow: "none",
      padding: "0",
    }}
    contentArrowStyle={{ borderRight: "7px solid hsl(var(--card))" }}
    iconStyle={{
      background: "hsl(var(--card))",
      boxShadow: "0 0 0 1px hsl(var(--border))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    icon={
      <img
        src={experience.icon}
        alt={`${experience.company} logo`}
        className="w-[60%] h-[60%] object-contain"
      />
    }
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotate: 0.5 }}
      animate
      className="
        rounded-xl p-6 transition-colors duration-300
        bg-[hsl(var(--card))] text-[hsl(var(--foreground))]
        shadow-md dark:shadow-none
        border border-[hsl(var(--border))]
        dark:border-white/10
      "
    >
      <h3 className="text-xl font-bold">{experience.role}</h3>

      <div className="mt-1 mb-2 flex items-center justify-center gap-2">
        <span className="text-primary text-sm font-medium">
          {experience.company}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {experience.period}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {experience.description}
      </p>
    </motion.div>
  </VerticalTimelineElement>
);

function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Experience;
