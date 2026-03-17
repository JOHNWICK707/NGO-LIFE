import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../lib/firebase";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [donationImageUrl, setDonationImageUrl] = useState("");

  useEffect(() => {
    const run = async () => {
      try {
        const snap = await getDoc(doc(db, "Data", "Images"));
        const heroValue = snap.exists() ? snap.get("Image_1") : "";
        const donationValue = snap.exists() ? snap.get("Image_3") : "";

        if (typeof heroValue === "string" && heroValue.trim()) {
          setImageUrl(heroValue.trim());
        }
        if (typeof donationValue === "string" && donationValue.trim()) {
          setDonationImageUrl(donationValue.trim());
        }
      } catch (err) {
        console.error("Failed to load hero image:", err);
      }
    };
    run();
  }, []);

  return (
    <div className="page-shell">
      <section className="mx-auto grid min-h-[88vh] w-full max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" /> Registered NGO since 2011
          </p>
          <h1 className="heading-font text-5xl font-black leading-tight text-white md:text-6xl">
            Empowering Communities, <span className="text-emerald-300">Transforming Lives</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200/90">
            LIFE works at the grassroots to build resilient, self-reliant communities through education,
            healthcare, and sustainable livelihood programs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400" to="/what-we-do">
              Explore Our Work
            </Link>
            <Link className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10" to="/contact">
              Volunteer with Us
            </Link>
          </div>
        </div>

        <div className="glass p-6 shadow-glow">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Community impact"
              className="mb-5 h-52 w-full rounded-2xl border border-white/20 object-cover"
              onError={() => setImageUrl("")}
            />
          ) : (
            <div className="mb-5 grid h-52 place-items-center rounded-2xl border border-white/20 bg-slate-900/60 text-slate-400">
              Image loading...
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Stat value="1,000,000+" label="Beneficiaries Served" />
            <Stat value="3,000+" label="Active Volunteers" />
            <Stat value="30" label="Ongoing Programs" />
            <Stat value="15" label="Years of Impact" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-emerald-300/20 bg-slate-900/65 p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Donation Appeal
            </p>
            <h2 className="heading-font text-3xl font-black text-white md:text-4xl">
              Your generosity can turn uncertainty into opportunity.
            </h2>
            <p className="mt-4 text-slate-200/90">
              Every donation helps us provide education support, healthcare camps, safe childhood programs,
              and livelihood training for vulnerable families. Together, we can build a future where no
              one is left behind.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
                to="/contact"
              >
                Donate Now
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-slate-950/40 p-3">
            {donationImageUrl ? (
              <img
                src={donationImageUrl}
                alt="Support LIFE donation drive"
                className="h-full min-h-72 w-full rounded-xl object-cover"
                onError={() => setDonationImageUrl("")}
              />
            ) : (
              <div className="grid h-full min-h-72 place-items-center rounded-xl border border-white/15 bg-slate-900/60 text-center text-slate-400">
                Donation image loading...
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center">
      <p className="heading-font text-4xl font-extrabold text-amber-400">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}
