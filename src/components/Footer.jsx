import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-ink-2">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-3 px-5 py-7 text-sm text-subtle sm:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <span className="font-mono text-xs">Built with React, Vite &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
