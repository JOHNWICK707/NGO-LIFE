const programs = [
  "Education & Digital Literacy",
  "Primary Healthcare Camps",
  "Women Empowerment",
  "Livelihood & Skill Development",
  "Child Welfare & Protection",
  "Environment & Sustainability"
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <h1 className="heading-font text-4xl font-black text-white md:text-5xl">What We Do</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        We design practical, measurable programs with local communities and partners.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <article key={program} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-emerald-300/40">
            <h2 className="heading-font text-xl font-bold text-white">{program}</h2>
            <p className="mt-3 text-sm text-slate-300">
              Community-driven implementation with transparent monitoring and real outcomes.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
