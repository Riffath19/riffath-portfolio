import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-glass transition-all duration-300 ${
            scrolled ? 'shadow-glow-accent' : ''
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-ink"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent-text">
              <Terminal size={16} />
            </span>
            <span className="hidden sm:inline">A.M. Riffath Hussain</span>
            <span className="sm:hidden">ARH</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wide text-ink-muted transition-colors hover:bg-white/5 hover:text-accent-text"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted lg:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="glass mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <div className="flex flex-col p-2">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="rounded-lg px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-ink-muted transition-colors hover:bg-white/5 hover:text-accent-text"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
