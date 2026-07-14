import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

export default function ProjectsPage() {
  return (
    <section className="page-section page-container">
      <SectionHeader title="projects" eyebrow="Selected Work" />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
