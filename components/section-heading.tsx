interface SectionHeadingProps {
  title: string
  subtitle: string
  className?: string
  subtitleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  className = "text-slate-900",
  subtitleClassName = "text-slate-600",
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold ${className}`}>{title}</h2>
      <p className={`mt-2 text-lg ${subtitleClassName}`}>{subtitle}</p>
      <div className="mt-4 flex justify-center">
        <div className="w-16 h-1 bg-slate-800 rounded"></div>
      </div>
    </div>
  )
}
