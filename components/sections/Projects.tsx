import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
          Projects
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured work
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/40"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
                <span className="text-zinc-800">·</span>
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
