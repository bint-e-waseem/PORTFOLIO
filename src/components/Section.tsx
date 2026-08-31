import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="relative py-20 sm:py-28" aria-labelledby={`${id}-heading`}>
      <div className="container-px">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="text-gradient mb-3 text-xs font-semibold tracking-[0.25em] uppercase">
            {eyebrow}
          </p>
          <h2 id={`${id}-heading`} className="font-display text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {intro ? <p className="mt-4 text-base leading-relaxed text-slate-400">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
