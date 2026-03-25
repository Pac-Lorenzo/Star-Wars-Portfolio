import { skillGroups } from "@/data/skills";
import SkillCard from "@/components/SkillCard";

export default function SkillsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 py-24">
      <h1 className="starwars starwars-side mb-16 text-center text-5xl md:text-7xl">
        skills
      </h1>

      <div className="w-full flex flex-col items-center gap-16">
        {skillGroups.map((group) => (
          <SkillCard
            key={group.title}
            title={group.title}
            skills={group.skills}
          />
        ))}
      </div>

    </section>
  );
}
