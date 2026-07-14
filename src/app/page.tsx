import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  return (
    <section className="page-section flex flex-col justify-center gap-5">
      <h1 className="hero-heading starwars starwars-side">
        francisco
        <br />
        lorenzo
      </h1>

      <p className="hero-serif text-3xl sm:text-4xl">
        Hi, I&apos;m <span className="hero-name-glow font-semibold">Francisco</span>
      </p>

      <h2 className="hero-type-line">
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

      <div className="hero-actions">
        <a
          href="/projects"
          className="theme-button theme-button-primary"
        >
          View Projects
        </a>

        <a
          href="/Francisco_Lorenzo_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="theme-button theme-button-secondary"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}
