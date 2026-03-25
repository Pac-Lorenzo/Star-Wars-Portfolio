"use client";

import { motion } from "framer-motion";

interface Props {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export default function ExperienceCard({
  role,
  organization,
  location,
  period,
  bullets,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="theme-panel rounded-xl p-6"
    >
      <h2 className="theme-section-title text-xl font-semibold">
        {role}
      </h2>

      <p className="theme-copy mt-1">
        {organization} — {location}
      </p>

      <p className="theme-soft-copy mt-1 text-sm">{period}</p>

      <ul className="theme-soft-copy mt-4 list-inside list-disc space-y-1">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </motion.div>
  );
}
