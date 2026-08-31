import { BarChart3, Brain, Code2, Layers, Wrench } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { Section } from './Section'

const groupIcons = { Code2, BarChart3, Brain, Layers, Wrench } as const

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A stack built for AI & data."
      intro="The tools I reach for — from first principles in C++ and SQL to the modern LLM stack."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[group.icon as keyof typeof groupIcons] ?? Brain
          return (
            <div
              key={group.title}
              className="reveal card-surface p-6"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet-accent/30 bg-violet-accent/10">
                  <Icon className="h-5 w-5 text-violet-300" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                  <p className="text-xs text-slate-500">{group.blurb}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="chip">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}

        {/* Learning card to balance the grid */}
        <div
          className="reveal card-surface flex flex-col justify-center border-dashed p-6"
          style={{ transitionDelay: `${skillGroups.length * 70}ms` }}
        >
          <p className="text-gradient font-display text-lg font-semibold">Always loading…</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Currently exploring <span className="text-slate-200">Deep Learning</span>,{' '}
            <span className="text-slate-200">Advanced Pandas</span>, and{' '}
            <span className="text-slate-200">Scikit-Learn</span> — the next skills on this page are
            already in training.
          </p>
        </div>
      </div>
    </Section>
  )
}
