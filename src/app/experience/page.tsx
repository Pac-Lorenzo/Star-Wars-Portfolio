import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <section className="min-h-screen">
      <h1 className="theme-section-title mb-12 text-4xl font-bold">
        Experience
      </h1>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.role} {...exp} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="theme-section-title mb-6 text-3xl font-semibold">
          Leadership & Involvement
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
