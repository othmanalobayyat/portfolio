import { ArrowRight, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Top radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 45% at 50% -5%, rgba(120,119,198,0.14) 0%, transparent 65%)",
          }}
        />
        {/* Bottom fade to background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#09090b] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-sm text-zinc-400 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          Intelligent Systems Engineering Student
        </div>

        {/* Name */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Othman{" "}
          <span className="bg-gradient-to-br from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Alobayyat
          </span>
        </h1>

        {/* Tagline */}
        <p className="mx-auto mb-10 max-w-xl text-base text-zinc-400 sm:text-lg md:text-xl">
          Building intelligent real-world systems using software, embedded
          systems, and modern technologies.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/othmanalobayyat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-colors hover:border-zinc-600 hover:bg-zinc-900"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
