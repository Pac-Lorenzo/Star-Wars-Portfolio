"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="theme-panel theme-card"
    >
      <h2 className="theme-section-title text-2xl font-semibold">
        {project.title}
      </h2>

      <p className="theme-copy mt-3">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="theme-chip theme-chip-pill text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="theme-soft-copy mt-4 list-inside list-disc text-sm">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="theme-link mt-4 inline-block"
        >
          View on GitHub →
        </a>
      )}
    </motion.div>
  );
}
