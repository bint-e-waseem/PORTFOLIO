import { ArrowUp, Globe } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons'
import { socials } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900/40 py-10">
      <div className="container-px flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-violet-accent/50 hover:text-white"
          >
            <Github className="h-4.5 w-4.5" aria-hidden="true" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-violet-accent/50 hover:text-white"
          >
            <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
          </a>
          <a
            href={socials.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaggle profile (opens in new tab)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-violet-accent/50 hover:text-white"
          >
            <Globe className="h-4.5 w-4.5" aria-hidden="true" />
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 <span className="font-medium text-slate-300">Yashfa Waseem</span>. Built with
          curiosity and AI.
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-violet-300"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
