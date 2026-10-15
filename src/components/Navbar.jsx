import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/hb-logo.png";
import { profile } from "../data/profile.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-ink/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-3 font-display text-[17px] font-semibold text-white"
        >
          <img src={logo} alt="" width="30" height="39" className="h-[39px] w-[30px]" />
          {profile.name}
        </a>

        {/* Desktop links: always visible, no hunting behind a menu icon */}
        <div className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[#c3c4dc] transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="btn-3d inline-flex min-h-11 items-center rounded-full px-5 font-semibold"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-xl border border-line text-text md:hidden"
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line-soft px-5 pb-6 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-line-soft text-lg font-medium text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            download
            onClick={() => setOpen(false)}
            className="btn-3d mt-5 flex min-h-12 items-center justify-center rounded-xl font-semibold"
          >
            Download résumé
          </a>
        </div>
      )}
    </header>
  );
}
