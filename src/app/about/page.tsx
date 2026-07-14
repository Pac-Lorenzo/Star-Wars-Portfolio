import GlobeWrapper from "@/components/GlobeWrapper";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <section className="page-section flex items-center">
      <div className="page-container grid w-full gap-12 md:grid-cols-2">

        {/* LEFT SIDE - TEXT */}
        <div>
          <SectionHeader title="about me" eyebrow="Overview" />

          <div className="page-copy space-y-6">
            <p>
              I am a Computer Engineering student at Villanova University
              focused on building scalable cloud systems and secure
              full-stack applications.
            </p>

            <p>
              My experience spans enterprise identity systems,
              hardware-level security architectures, embedded systems,
              and financial analytics platforms.
            </p>

            <p>
              I am especially interested in backend systems,
              performance optimization, and designing systems
              that operate reliably at scale.
            </p>

            <p>
              Outside of engineering, I am involved in IEEE,
              SHPE, Club Tennis, and Special Olympics.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - GLOBE */}
        <div className="relative flex items-center justify-center">
          <div className="theme-orb absolute h-[420px] w-[420px] rounded-full blur-3xl" />
          <GlobeWrapper />
        </div>

      </div>
    </section>
  );
}
