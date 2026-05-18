import { focusAreas } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
        About
      </p>
      <h2 className="mb-8 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Engineering where intelligence meets systems
      </h2>
      <div className="max-w-3xl space-y-5 text-[15px] leading-[1.8] text-zinc-400">
        <p>
          I build practical systems at the intersection of embedded hardware and
          software. Most of my work starts with a real-world problem and asks:
          what does the sensing architecture look like, how does data move
          through the system, and where does decision-making or automation
          actually add value?
        </p>
        <p>
          On the embedded side, I work with ESP32 and Arduino — sensor
          integration, communication protocols, real-time data acquisition. On
          the software side, I design REST APIs, full-stack web applications,
          and mobile apps. The most interesting engineering happens at the
          boundary where these layers have to exchange data and work together
          under real constraints.
        </p>
        <p>
          I apply AI as an engineering tool rather than an end in itself —
          computer vision inside a posture monitoring pipeline, anomaly
          detection on sensor streams, or intelligent scheduling in a task
          management system. The goal is always a system that solves a specific
          problem, not a demonstration of technique.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {focusAreas.map(({ label, desc }) => (
          <div
            key={label}
            className="rounded-xl border border-zinc-700/40 bg-[#13141F] p-4 transition-all hover:border-zinc-600/50 hover:bg-[#161820]"
          >
            <div className="mb-1 text-sm font-medium text-zinc-100">
              {label}
            </div>
            <div className="text-xs text-zinc-500">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
