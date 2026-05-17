import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
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
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-700/40 bg-[#13141F] p-6 transition-all duration-300 hover:border-zinc-600/60 hover:bg-[#161820] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

              {/* Project number */}
              <span className="absolute right-5 top-5 select-none font-mono text-xs text-zinc-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mb-2.5 pr-8 text-base font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-zinc-700/40 bg-[#0F1117] px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-200"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <span className="text-zinc-700">·</span>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-200"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Demo
                  </a>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-700 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
