import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { experiences, type ExperienceItem } from "../lib/utils";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative pl-6 md:pl-10 pb-12 last:pb-0 group"
    >
      {/* Timeline line connecting points */}
      <div className="absolute left-[11px] md:left-[19px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-border group-last:hidden" />

      {/* Timeline Node Point */}
      <div className="absolute left-0 md:left-2 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.4)] group-hover:scale-125 transition-transform duration-300">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Card Content Container */}
      <div className="bg-card border border-border/70 hover:border-primary/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Header: Logo, Title, Meta */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-border/40">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 p-2 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
              {experience.icon ? (
                <img
                  src={experience.icon}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain rounded-md"
                />
              ) : (
                <Building2 className="w-7 h-7 text-primary" />
              )}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                {experience.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-primary font-semibold text-base">
                  {experience.company}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                  {experience.type}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs md:text-sm text-muted-foreground shrink-0">
            <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-md">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{experience.period}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-md">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Bullets List */}
        <div className="space-y-3 mb-6">
          {experience.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
          {experience.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block mb-3">
            Career & Accomplishments
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base">
            Detailed breakdown of software engineering roles, enterprise API integrations, high-throughput microservices, and AI-driven solutions.
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id || index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
