import SkillCircle from "./SkillCircle";
import type { Skill } from "@/data/skills";

type Props = {
  title: string;
  skills: Skill[];
};

export default function SkillCard({ title, skills }: Props) {
  return (
    <div className="theme-panel group/card relative w-full max-w-5xl overflow-hidden rounded-3xl p-10 transition-all duration-300">
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl border border-[rgb(59_130_246/0.95)] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{
          boxShadow:
            "0 0 6px rgb(59 130 246 / 0.9), 0 0 18px rgb(59 130 246 / 0.7), 0 0 40px rgb(59 130 246 / 0.45)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-12 top-0 h-24 rounded-full bg-[rgb(59_130_246/0.18)] blur-3xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center">
        <div className="theme-chip mb-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] transition-all duration-300 group-hover/card:border-[rgb(59_130_246/0.35)] group-hover/card:bg-[rgb(59_130_246/0.1)] group-hover/card:text-[rgb(59_130_246)]">
          {skills.length} tools
        </div>

        <h3 className="mb-10 text-2xl font-semibold transition-all duration-300 group-hover/card:text-[rgb(59_130_246)] group-hover/card:[text-shadow:0_0_4px_rgb(59_130_246/0.45),0_0_10px_rgb(59_130_246/0.22)]">
          {title}
        </h3>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
        {skills.map((skill) => (
          <SkillCircle
            key={skill.label}
            percentage={skill.percentage}
            color={skill.color}
            icon={skill.icon}
            label={skill.label}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
