import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { db } from "../lib/firebase";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const loadLogo = async () => {
      try {
        const snap = await getDoc(doc(db, "Data", "Images"));
        const value = snap.exists() ? snap.get("Image_2") : "";
        if (typeof value === "string" && value.trim()) {
          setLogoUrl(value.trim());
          return;
        }
      } catch (error) {
        console.error("Failed to load logo image from Firestore:", error);
      }

      setLogoUrl("");
    };

    loadLogo();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-emeraldBrand-500 text-lg font-bold text-white">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="LIFE logo"
                className="h-full w-full object-cover"
                onError={() => setLogoUrl("")}
              />
            ) : (
              "L"
            )}
          </span>
          <div>
            <p className="heading-font text-lg font-bold leading-none text-white">LIFE</p>
            <p className="text-xs text-emerald-200">Local Ideas For Empowerment</p>
          </div>
        </NavLink>
        <nav className="hidden gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? "bg-emerald-500 text-white" : "text-slate-300 hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
