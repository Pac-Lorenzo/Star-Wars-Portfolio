import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <section className="page-section page-container">
      <SectionHeader title="contact" eyebrow="Reach Out" />

      <div className="page-copy space-y-6">
        <p>
          Interested in collaborating or discussing opportunities?
          Feel free to reach out.
        </p>

        <div className="space-y-4">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:pacochelorenzo@gmail.com"
              className="theme-link"
            >
              pacochelorenzo@gmail.com
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/pacolorenzo17/"
              target="_blank"
              rel="noreferrer"
              className="theme-link"
            >
              linkedin.com/in/pacolorenzo17
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Pac-Lorenzo"
              target="_blank"
              rel="noreferrer"
              className="theme-link"
            >
              github.com/Pac-Lorenzo
            </a>
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/Francisco_Lorenzo_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="theme-button theme-button-primary"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
