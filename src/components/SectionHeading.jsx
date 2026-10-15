// Centred two-tone heading used by every section: "About" + "Me".
export default function SectionHeading({ id, title, highlight, subtitle }) {
  return (
    <div className="mb-14 flex flex-col items-center gap-3 text-center">
      <h2
        id={id}
        className="font-display text-[34px] font-bold tracking-[-0.02em] sm:text-[44px]"
      >
        {title} <span className="text-violet">{highlight}</span>
      </h2>
      {subtitle && <p className="max-w-xl text-muted">{subtitle}</p>}
    </div>
  );
}
