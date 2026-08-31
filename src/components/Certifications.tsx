import { Award, ExternalLink } from 'lucide-react'
import { certificates } from '../data/portfolio'
import { Section } from './Section'

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials on the way."
      intro="A dedicated space for certificates and achievements — update the entries in src/data/portfolio.ts as you earn them."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => {
          const inner = (
            <>
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Award
                    className="h-5 w-5 text-slate-400 transition-colors group-hover:text-violet-300"
                    aria-hidden="true"
                  />
                </span>
                {cert.url ? (
                  <ExternalLink className="h-4 w-4 text-slate-600" aria-hidden="true" />
                ) : (
                  <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                    Placeholder
                  </span>
                )}
              </div>
              <div className="mt-5">
                <p className="font-display text-base font-semibold text-slate-200">{cert.name}</p>
                <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
                <p className="mt-2 text-xs font-medium text-slate-600">{cert.year}</p>
              </div>
            </>
          )

          const className =
            'reveal card-surface group relative flex min-h-40 flex-col justify-between border-dashed p-6'
          const style = { transitionDelay: `${index * 80}ms` }

          return cert.url ? (
            <a
              key={`${cert.name}-${index}`}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
              style={style}
            >
              {inner}
            </a>
          ) : (
            <div key={`${cert.name}-${index}`} className={className} style={style}>
              {inner}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
