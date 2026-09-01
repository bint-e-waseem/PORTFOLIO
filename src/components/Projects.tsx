import { ArrowUpRight, ExternalLink, FolderGit2 } from 'lucide-react'
import { featuredProjects, githubRepos, socials } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

const languageColors: Record<string, string> = {
  Python: 'bg-sky-400',
  'C++': 'bg-rose-400',
  'Jupyter Notebook': 'bg-amber-400',
  TypeScript: 'bg-blue-400',
  HTML: 'bg-orange-400',
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Things I'm building."
      intro="Curated flagship projects in progress — each one a pipeline from raw input to useful output. Repo and demo links activate as they ship."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Live repositories from GitHub */}
      <div className="reveal mt-16 sm:mt-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">More from my GitHub</h3>
            <p className="mt-2 text-sm text-slate-400">
              Live repositories — notebooks, analysis, and systems I&rsquo;ve actually shipped.
            </p>
          </div>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !px-5 !py-2.5 text-sm"
          >
            View all on GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {githubRepos.map((repo, index) => (
            <div
              key={repo.url}
              className="reveal card-surface group flex flex-col p-5"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <FolderGit2 className="h-5 w-5 text-violet-400" aria-hidden="true" />
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${repo.name} on GitHub`}
                  className="rounded-md p-1 text-slate-600 transition-all hover:bg-white/[0.06] hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-violet-400"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-mono text-sm font-semibold break-all text-white transition-colors group-hover:text-violet-200"
              >
                {repo.name}
              </a>
              <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-slate-400">
                {repo.description}
              </p>
              <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                <p className="flex items-center gap-2 text-xs text-slate-500">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${languageColors[repo.language] ?? 'bg-slate-400'}`}
                    aria-hidden="true"
                  />
                  {repo.language}
                </p>
                {repo.demo && (
                  <a
                    href={repo.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-electric transition-colors hover:text-sky-300"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Live demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
