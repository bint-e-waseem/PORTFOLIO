import { BookOpen, GraduationCap, MapPin, Sparkles, Target, Users } from 'lucide-react'
import { about, personal } from '../data/portfolio'
import { Section } from './Section'

const factIcons = { Target, BookOpen, Users, Sparkles } as const

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Student by day, builder by curiosity."
      intro="Aspiring Prompt Engineer, AI/LLM developer, and data analyst — turning questions into pipelines and data into decisions."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-slate-400">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <GraduationCap className="h-4 w-4 text-violet-400" aria-hidden="true" />
              Student @ IBIT
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <MapPin className="h-4 w-4 text-electric" aria-hidden="true" />
              {personal.location}
            </span>
          </div>
        </div>

        <div className="reveal space-y-4" style={{ transitionDelay: '120ms' }}>
          {about.facts.map((fact) => {
            const Icon = factIcons[fact.icon as keyof typeof factIcons] ?? Sparkles
            return (
              <div key={fact.label} className="card-surface flex items-start gap-4 p-5">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-accent/30 bg-violet-accent/10">
                  <Icon className="h-5 w-5 text-violet-300" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{fact.label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">{fact.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
