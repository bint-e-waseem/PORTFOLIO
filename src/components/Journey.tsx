import { GraduationCap, Rocket } from 'lucide-react'
import { journey } from '../data/portfolio'
import { Section } from './Section'

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Education & Learning Journey"
      title="Learning in public, building in earnest."
      intro="I'm a student actively developing practical expertise in AI, LLM applications, and data — one project, notebook, and pipeline at a time."
    >
      {/* Education card */}
      <div className="reveal card-surface mb-14 flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:p-8">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-accent/30 bg-violet-accent/10">
          <GraduationCap className="h-7 w-7 text-violet-300" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold tracking-wider text-violet-300 uppercase">
            Currently enrolled
          </p>
          <h3 className="font-display mt-1 text-xl font-semibold text-white">{journey.education.school}</h3>
          <p className="mt-1 text-sm text-slate-300">{journey.education.detail}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{journey.education.note}</p>
        </div>
      </div>

      {/* Timeline */}
      <ol className="relative mx-auto max-w-3xl space-y-10 border-l border-white/10 pl-8 sm:pl-10">
        {journey.phases.map((phase, index) => {
          const isLast = index === journey.phases.length - 1
          return (
            <li key={phase.phase} className="reveal relative" style={{ transitionDelay: `${index * 90}ms` }}>
              <span
                className={`absolute top-1 -left-[41px] h-4 w-4 rounded-full border-2 sm:-left-[49px] ${
                  isLast
                    ? 'animate-glow-pulse border-violet-400 bg-violet-accent shadow-lg shadow-violet-accent/50'
                    : 'border-slate-600 bg-navy-800'
                }`}
                aria-hidden="true"
              />
              <p
                className={`text-xs font-semibold tracking-[0.2em] uppercase ${
                  isLast ? 'text-gradient' : 'text-slate-500'
                }`}
              >
                {phase.phase}
                {isLast ? ' · Now' : ''}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold text-white">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{phase.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Focus areas">
                {phase.tags.map((tag) => (
                  <li key={tag}>
                    <span className="chip">{tag}</span>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>

      {/* Currently callout */}
      <div
        className="reveal mx-auto mt-14 max-w-3xl rounded-2xl border border-electric/20 bg-electric/[0.06] p-6 sm:p-7"
        style={{ transitionDelay: '200ms' }}
      >
        <p className="flex items-center gap-2 text-sm font-semibold text-sky-300">
          <Rocket className="h-4 w-4" aria-hidden="true" />
          Currently
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Learning <span className="font-medium text-white">{journey.current.learning}</span> while
          building <span className="font-medium text-white">{journey.current.building}</span>. Always
          open to collaborating on data & AI projects.
        </p>
      </div>
    </Section>
  )
}
