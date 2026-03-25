export default function ContactPage() {
  return (
    <section className="min-h-screen">
      <h1 className="theme-section-title mb-12 text-4xl font-bold">
        Contact
      </h1>

      <div className="theme-copy space-y-6 text-lg">
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
              className="theme-link"
            >
              github.com/Pac-Lorenzo
            </a>
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="theme-button-primary inline-block rounded-lg px-6 py-3"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
