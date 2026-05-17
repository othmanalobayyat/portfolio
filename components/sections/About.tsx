const focusAreas = [
  { label: "Embedded Systems", desc: "Firmware & hardware protocols" },
  { label: "IoT Architecture", desc: "Sensor networks & connectivity" },
  { label: "Full-Stack Engineering", desc: "Backend APIs & web platforms" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
        About
      </p>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Engineering where intelligence
        <br className="hidden sm:block" /> meets systems
      </h2>
      <div className="max-w-3xl space-y-5 text-[15px] leading-[1.8] text-zinc-400">
        <p>
          I&apos;m an Intelligent Systems Engineering student with a strong focus on
          building systems that span the full stack — from microcontroller
          firmware to cloud-connected web platforms. My work sits at the
          intersection of embedded systems, IoT, and backend engineering.
        </p>
        <p>
          I&apos;ve worked across multiple domains: designing low-level hardware
          communication protocols, building RESTful APIs and backend services,
          and developing full-stack web applications. I enjoy the challenge of
          making disparate components work together reliably and efficiently.
        </p>
        <p>
          I&apos;m continuously applying advances in machine learning, computer
          vision, and edge computing to create smarter, more responsive systems
          — always with an emphasis on solving real problems.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {focusAreas.map(({ label, desc }) => (
          <div
            key={label}
            className="rounded-xl border border-zinc-700/40 bg-[#13141F] p-4 transition-all hover:border-zinc-600/50 hover:bg-[#161820]"
          >
            <div className="mb-1 text-sm font-medium text-zinc-100">{label}</div>
            <div className="text-xs text-zinc-500">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
