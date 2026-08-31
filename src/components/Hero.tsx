import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react'
import { personal, socials } from '../data/portfolio'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="animate-glow-pulse absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-accent/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[8%] bottom-[12%] h-72 w-72 rounded-full bg-electric/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-px relative grid items-center gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-violet-accent/30 bg-violet-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-200">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Open to internships, projects & collaborations
          </p>

          <h1 className="reveal font-display text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
            Hi, I&rsquo;m <span className="text-gradient">Yashfa Waseem.</span>
          </h1>

          <p
            className="reveal mt-4 text-lg font-medium text-slate-200 sm:text-xl"
            style={{ transitionDelay: '90ms' }}
          >
            {personal.role}
          </p>

          <p
            className="reveal mt-5 max-w-xl text-base leading-relaxed text-slate-400"
            style={{ transitionDelay: '160ms' }}
          >
            {personal.tagline}
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4" style={{ transitionDelay: '230ms' }}>
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a
              href={personal.resumeUrl}
              download="Yashfa_Waseem_Resume.pdf"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-slate-400 transition-colors hover:text-violet-300"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="reveal mt-10 flex items-center gap-5 text-sm" style={{ transitionDelay: '300ms' }}>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-violet-400" aria-hidden="true" />
              {personal.email}
            </a>
            <span className="hidden text-slate-600 sm:inline" aria-hidden="true">
              ·
            </span>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-medium text-slate-400 transition-colors hover:text-white sm:inline"
            >
              LinkedIn ↗
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-medium text-slate-400 transition-colors hover:text-white sm:inline"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Terminal-style card */}
        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <div className="animate-float card-surface mx-auto max-w-md p-0 lg:mx-0" aria-hidden="true">
            <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-300/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">yashfa@ai ~ prompt</span>
            </div>
            <div className="space-y-3.5 px-5 py-6 font-mono text-[13px] leading-relaxed">
              <p className="text-slate-400">
                <span className="text-violet-400">$</span> prompt --task &quot;build useful AI&quot;
              </p>
              <p className="text-slate-500">
                <span className="text-electric">➜</span> loading context: curiosity, data, LLMs…
              </p>
              <p className="text-slate-500">
                <span className="text-electric">➜</span> pipeline: clean → embed → retrieve → generate
              </p>
              <p className="text-emerald-300/90">✓ grounded answers, real datasets, no hallucinated hype</p>
              <p className="text-slate-300">
                <span className="text-violet-400">output:</span> Yashfa Waseem — portfolio
                <span className="animate-caret text-violet-300">▍</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
