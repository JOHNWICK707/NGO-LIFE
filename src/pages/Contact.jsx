import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("https://formsubmit.co/ajax/ngolife96@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Message - LIFE NGO",
          _captcha: "false"
        })
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setStatus({
        type: "success",
        text: "Message sent successfully. Please check ngolife96@gmail.com inbox."
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        text: "Message send failed. Please try again in a moment."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <h1 className="heading-font text-4xl font-black text-white md:text-5xl">Contact Us</h1>
      <p className="mt-4 max-w-3xl text-slate-300">We would love to hear from you. Reach out for volunteering, donations, and partnerships.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="heading-font text-2xl font-bold text-white">Reach Us</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li><i className="fa-solid fa-location-dot mr-2 text-emerald-300" /> 108, Lalbagh Road, Dhaka, Bangladesh</li>
            <li><i className="fa-solid fa-phone mr-2 text-emerald-300" /> +880 1673987382</li>
            <li><i className="fa-solid fa-envelope mr-2 text-emerald-300" /> ngolife96@gmail.com</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="heading-font text-2xl font-bold text-white">Send a Message</h2>
          <div className="mt-5 grid gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-slate-100 outline-none focus:border-emerald-300"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-slate-100 outline-none focus:border-emerald-300"
              placeholder="Email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-28 rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-slate-100 outline-none focus:border-emerald-300"
              placeholder="Your message"
            />
            {status.text ? (
              <p className={status.type === "success" ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>
                {status.text}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <section className="mt-10 rounded-3xl border border-amber-300/30 bg-gradient-to-br from-amber-400/10 to-emerald-400/10 p-6 md:p-8">
        <p className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
          Donation Information
        </p>
        <h2 className="heading-font mt-4 text-3xl font-black text-white md:text-4xl">Give Hope. Build Futures.</h2>
        <p className="mt-3 max-w-3xl text-slate-200/90">
          Your support directly helps our programs reach more children and families.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-slate-900/60 p-5">
            <p className="text-sm uppercase tracking-wider text-amber-200">Bkash</p>
            <p className="mt-2 text-xl font-bold text-white">01913037774</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-slate-900/60 p-5">
            <p className="text-sm uppercase tracking-wider text-amber-200">Bank Transfer</p>
            <p className="mt-2 text-xl font-bold text-white">xxxxxx</p>
          </div>
        </div>
      </section>
    </section>
  );
}
