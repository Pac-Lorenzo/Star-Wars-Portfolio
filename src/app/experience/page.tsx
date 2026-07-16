import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";
import SectionHeader from "@/components/SectionHeader";

export default function ExperiencePage() {
  return (
    <section className="page-section page-container">
      <SectionHeader title="experience" eyebrow="Work History" />

      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.role} {...exp} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="section-subheading theme-section-title">
          Memberships
        </h2>

        <ul className="theme-copy space-y-2">
          <li>Tau Beta Pi Honor Society</li>
          <li>Institute of Electrical and Electronics Engineers (IEEE)</li>
          <li>Society of Hispanic Professional Engineers (SHPE)</li>
          <li>Villanova Club Tennis</li>
          <li>Pi Kappa Phi Fraternity</li>
          <li>Special Olympics</li>
        </ul>
      </div>
    </section>
  );
}
