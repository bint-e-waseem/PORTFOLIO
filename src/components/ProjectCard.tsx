import { BarChart3, Bot, ExternalLink, MessageSquare, SlidersHorizontal } from 'lucide-react'
import { GithubIcon as Github } from './icons'
import type { Project } from '../data/portfolio'
import { socials } from '../data/portfolio'

const projectIcons = { Bot, BarChart3, MessageSquare, SlidersHorizontal } as const

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[project.icon as keyof typeof projectIcons] ?? Bot
  const githubHref = project.github || socials.github
  const demoHref = project.demo || socials.github

  return (
    <article
      className="reveal card-surface group flex flex-col p-6 sm:p-7"
      style={{ transitionDelay: `${index * 90}ms` }}
      aria-label={project.title}
    >
      <div className="mb-5 flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-accent/30 bg-violet-accent/10 transition-colors group-hover:border-violet-accent/60">
          <Icon className="h-6 w-6 text-violet-300" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-sky-300 uppercase">
          {project.status}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tech.map((tech) => (
          <li key={tech}>
            <span className="chip">{tech}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-white/5 pt-5">
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-violet-accent/50 hover:text-white"
          aria-label={`${project.title} on GitHub (opens in new tab)`}
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
        <a
          href={demoHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-violet-300"
          aria-label={`${project.title} live demo placeholder (opens in new tab)`}
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live Demo
          <span className="text-[11px] text-slate-600">(soon)</span>
        </a>
      </div>
    </article>
  )
}
