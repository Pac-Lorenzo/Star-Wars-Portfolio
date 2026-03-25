import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-5">
      <h1 className="starwars starwars-side text-[2.3rem] leading-[0.92] sm:text-6xl md:text-7xl">
        francisco
        <br />
        lorenzo
      </h1>

      <p className="hero-serif text-3xl sm:text-4xl">
        Hi, I&apos;m <span className="hero-name-glow font-semibold">Francisco</span>
      </p>

      <h2 className="theme-accent min-h-[2.5rem] text-[1.75rem] font-semibold tracking-[0.18em] sm:min-h-[3.5rem] sm:text-4xl md:min-h-[4rem] md:text-5xl">
        <TypewriterText
          className="starwars starwars-side"
          options={{
            strings: ["web developer", "software engineer", "ai trainer"],
            delay: 50,
            deleteSpeed: 30,
            loop: true,
            autoStart: true,
          }}
        />
      </h2>

      <p className="theme-copy max-w-xl">
        Building scalable cloud systems, secure architectures,
        and data-driven applications.
      </p>

      <div className="mt-4 flex gap-4">
        <a
          href="/projects"
          className="theme-button-primary rounded-lg px-6 py-3"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          download
          className="theme-button-secondary rounded-lg px-6 py-3"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
