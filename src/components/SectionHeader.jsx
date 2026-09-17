export default function SectionHeader({ eyebrow, title, lead }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-amberDark">{eyebrow}</p>}
      <h2 className="font-serif text-3xl font-bold text-brand-tealDark md:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-gray-600">{lead}</p>}
    </div>
  )
}
