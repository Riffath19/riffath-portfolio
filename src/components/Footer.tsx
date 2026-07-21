import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} A.M. Riffath Hussain. Built with React,
          TypeScript &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:imusthafa24@gmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent-text"
          >
            <Mail size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/riffath-hussain-83205b227"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent-text"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="https://github.com/Riffath19"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent-text"
          >
            <Github size={14} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent-text transition-colors hover:bg-accent/20"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
