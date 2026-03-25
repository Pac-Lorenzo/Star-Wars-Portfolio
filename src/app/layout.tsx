import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Francisco Lorenzo | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning data-theme="dark-side">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem("theme");
                document.documentElement.dataset.theme =
                  savedTheme === "light-side" ? "light-side" : "dark-side";
              } catch (error) {
                document.documentElement.dataset.theme = "dark-side";
              }
            `,
          }}
        />
        <ThemeToggle />
        <Navbar />
        <main className="px-6 md:px-20 pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
