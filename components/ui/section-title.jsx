export default function SectionTitle({ eyebrow, title, desc, action }) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <div className="mb-2 inline-flex items-center rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-xs font-medium text-sky-700">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">{title}</h2>
        {desc ? <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">{desc}</p> : null}
      </div>
      {action}
    </div>
  );
}
