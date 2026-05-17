import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
          Skills
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Technologies
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-5 transition-colors hover:border-zinc-700/60 hover:bg-zinc-900/30"
            >
              <h3 className="mb-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
