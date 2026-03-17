export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="heading-font text-2xl font-bold text-white">LIFE NGO</h3>
          <p className="mt-3 text-sm text-slate-300">
            Building resilient communities through education, health, livelihoods, and local innovation.
          </p>
        </div>
        <div>
          <h4 className="heading-font text-lg font-semibold text-white">Contact</h4>
          <p className="mt-3 text-sm text-slate-300">ngolife96@gmail.com</p>
          <p className="text-sm text-slate-300">+880 1673987382</p>
        </div>
        <div>
          <h4 className="heading-font text-lg font-semibold text-white">Office</h4>
          <p className="mt-3 text-sm text-slate-300">108, Lalbagh Road, Dhaka</p>
          <p className="text-sm text-slate-300">Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
