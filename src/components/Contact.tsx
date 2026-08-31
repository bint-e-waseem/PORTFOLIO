import { useState, type FormEvent } from 'react'
import { Globe, Mail, Send } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons'
import { personal, socials } from '../data/portfolio'
import { Section } from './Section'

const channels = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'yashfa-waseem',
    href: socials.linkedin,
    accent: 'text-sky-300',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'bint-e-waseem',
    href: socials.github,
    accent: 'text-slate-200',
  },
  {
    icon: Globe,
    label: 'Kaggle',
    value: 'yashfawaseem',
    href: socials.kaggle,
    accent: 'text-emerald-300',
  },
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    accent: 'text-violet-300',
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [opened, setOpened] = useState(false)

  const update = (field: keyof typeof form) => (e: { target: { value: string } }) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setOpened(false)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  const inputClasses =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 transition-colors focus:border-violet-accent/60 focus:outline-none'

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something useful."
      intro="Whether it's an internship, a project, a dataset, or just a good idea — my inbox is open."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Channels */}
        <div className="reveal space-y-4">
          <p className="text-base leading-relaxed text-slate-400">
            I&rsquo;m a student in build mode, always open to collaborating on interesting data and AI
            projects. The fastest way to reach me is email, but I&rsquo;m active on all of these.
          </p>
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('mailto') ? undefined : '_blank'}
              rel={channel.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="card-surface group flex items-center gap-4 p-4"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <channel.icon className={`h-5 w-5 ${channel.accent}`} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  {channel.label}
                </span>
                <span className="block text-sm font-medium break-all text-slate-200 transition-colors group-hover:text-white">
                  {channel.value}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal card-surface space-y-5 p-6 sm:p-8"
          style={{ transitionDelay: '120ms' }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={update('email')}
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={form.message}
              onChange={update('message')}
              placeholder="Tell me about your project, idea, or opportunity…"
              className={`${inputClasses} resize-y`}
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Message
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="text-center text-xs text-slate-600" aria-live="polite">
            {opened
              ? 'Your email app should be opening with the message ready to send.'
              : 'Submitting opens your email app with the message pre-filled.'}
          </p>
        </form>
      </div>
    </Section>
  )
}
