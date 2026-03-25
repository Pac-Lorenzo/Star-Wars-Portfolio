import SkillCircle from "./SkillCircle";
import type { Skill } from "@/data/skills";

type Props = {
  title: string;
  skills: Skill[];
};

export default function SkillCard({ title, skills }: Props) {
  return (
    <div className="theme-panel group/card relative w-full max-w-5xl overflow-hidden rounded-3xl p-10 transition-all duration-300 hover:border-[rgb(var(--accent)/0.65)] hover:shadow-[0_0_0_1px_rgb(var(--accent)/0.12),0_0_24px_rgb(var(--accent)/0.18),0_20px_60px_rgb(0_0_0/0.18)]">
      <div
        className="theme-orb pointer-events-none absolute inset-x-12 top-0 h-24 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center">
        <div className="theme-chip mb-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em]">
          {skills.length} tools
        </div>

        <h3 className="mb-10 text-2xl font-semibold">
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
