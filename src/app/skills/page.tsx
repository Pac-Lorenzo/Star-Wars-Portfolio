import { skillGroups } from "@/data/skills";
import SkillCard from "@/components/SkillCard";
import SectionHeader from "@/components/SectionHeader";

export default function SkillsPage() {
  return (
    <section className="page-section py-24">
      <div className="page-container">
        <SectionHeader title="skills" eyebrow="Tech Stack" />

        <div className="flex flex-col items-center gap-16">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
