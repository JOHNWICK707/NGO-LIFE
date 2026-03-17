export default function About() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <h1 className="heading-font text-4xl font-black text-white md:text-5xl">About LIFE</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        LIFE (Local Ideas For Empowerment) is a grassroots NGO building long-term social impact through
        community-led action.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card title="Mission" text="Enable access to education, healthcare, and dignified livelihoods." />
        <Card title="Vision" text="Inclusive communities where every person has opportunity and voice." />
        <Card title="Values" text="Integrity, equity, collaboration, compassion, and sustainability." />
        
      </div>
    </section>
  );
}

function Card({ title, text }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
      <h2 className="heading-font text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-slate-300">{text}</p>
    </article>
  );
}
