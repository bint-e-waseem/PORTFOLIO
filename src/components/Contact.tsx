import { Globe, Mail } from 'lucide-react'
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
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something useful."
      intro="Whether it's an internship, a project, a dataset, or just a good idea — my inbox is open. The fastest way to reach me is email, but I'm active on all of these."
    >
      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {channels.map((channel, index) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith('mailto') ? undefined : '_blank'}
            rel={channel.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="reveal card-surface group flex items-center gap-4 p-5"
            style={{ transitionDelay: `${index * 70}ms` }}
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
    </Section>
  )
}
