import GlobeWrapper from "@/components/GlobeWrapper";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-12 w-full">

        {/* LEFT SIDE - TEXT */}
        <div>
          <h1 className="theme-section-title mb-8 text-4xl font-bold">
            About Me
          </h1>

          <div className="theme-copy max-w-xl space-y-6 text-lg">
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
        <div className="flex justify-center items-center relative">
          <div className="theme-orb absolute h-[420px] w-[420px] rounded-full blur-3xl" />
          <GlobeWrapper />
        </div>

      </div>
    </section>
  );
}
