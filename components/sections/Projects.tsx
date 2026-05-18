import { Github, ExternalLink, Lock } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
          Projects
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured work
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => {
            const isInternalDemo =
              project.demo !== null && project.demo.startsWith("/");

            if (project.featured) {
              return (
                <FeaturedCard
                  key={project.title}
                  project={project}
                  index={index}
                  isInternalDemo={isInternalDemo}
                />
              );
            }

            return (
              <StandardCard
                key={project.title}
                project={project}
                index={index}
                isInternalDemo={isInternalDemo}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Featured card — full-width, with architecture highlights ─────────────────

function FeaturedCard({
  project,
  index,
  isInternalDemo,
}: {
  project: (typeof projects)[number];
  index: number;
  isInternalDemo: boolean;
}) {
  return (
    <article className="group relative col-span-1 flex flex-col overflow-hidden rounded-xl border border-zinc-700/40 bg-[#13141F] p-6 transition-all duration-300 hover:border-zinc-600/60 hover:bg-[#161820] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:col-span-2 sm:p-8">
      {/* Top accent line — brighter on featured */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent" />

      {/* Project number */}
      <span className="absolute right-6 top-6 select-none font-mono text-xs text-zinc-700 sm:right-8 sm:top-8">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className="mb-3 pr-8 text-base font-semibold text-white sm:text-lg">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px] sm:leading-[1.75]">
        {project.description}
      </p>

      {/* Architecture highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-2">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-1.5 rounded-md border border-indigo-900/50 bg-indigo-950/30 px-2.5 py-1.5 text-[11px] font-medium text-indigo-300/80"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-indigo-400/60" />
              {h}
            </span>
          ))}
        </div>
      )}

      {/* Tech badges */}
      <div className="mb-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-zinc-700/40 bg-[#0F1117] px-2.5 py-1 text-xs font-medium text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Single CTA */}
      <div className="flex items-center gap-4">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700">
              <Lock className="h-3 w-3" />
              Private
            </span>
          )}

          {project.demo && (
            <>
              <span className="text-zinc-700">·</span>
              {isInternalDemo ? (
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View Product
                </a>
              ) : (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              )}
            </>
          )}
      </div>
    </article>
  );
}

// ─── Standard card — de-emphasised, write-up pending ─────────────────────────

function StandardCard({
  project,
  index,
  isInternalDemo,
}: {
  project: (typeof projects)[number];
  index: number;
  isInternalDemo: boolean;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800/50 bg-[#13141F]/60 p-6 transition-all duration-300 hover:border-zinc-700/60 hover:bg-[#161820]/80">
      {/* Top accent line — dimmer on non-featured */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-600/30 to-transparent" />

      {/* Project number */}
      <span className="absolute right-5 top-5 select-none font-mono text-xs text-zinc-800">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="mb-2 pr-8 text-sm font-semibold text-zinc-300">
        {project.title}
      </h3>

      <p className="mb-4 flex-1 text-xs leading-relaxed text-zinc-600 italic">
        {project.description}
      </p>

      {/* Tech badges — still visible as credibility signal */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-zinc-800/60 bg-[#0F1117]/60 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
