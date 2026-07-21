import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-accent/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-text">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            open to Software Engineering internships
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            A.M. Riffath
            <br />
            <span className="text-gradient">Hussain</span>
          </h1>

          <p
            className="relative z-10 mt-5 max-w-xl font-mono text-sm sm:text-base"
            style={{ color: 'var(--accent-text, #2dd9c5)' }}
          >
            Software Engineering Undergraduate · Backend &amp; Distributed
            Systems Enthusiast
          </p>

          <p
            className="relative z-10 mt-5 max-w-xl text-[15px] leading-relaxed sm:text-base"
            style={{ color: 'var(--ink-muted, #8b98a9)' }}
          >
            Building scalable software solutions with Java, TypeScript,
            Node.js, React, PostgreSQL, Docker, AWS, and modern cloud
            technologies.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-mono text-xs font-medium uppercase tracking-wide text-[#04140F] shadow-glow-accent transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent-text"
            >
              <Download size={14} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-mono text-xs font-medium uppercase tracking-wide text-ink-muted transition-colors hover:text-accent-text"
            >
              <Mail size={14} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative isolate mx-auto w-full max-w-sm"
        >
          {/* ambient glow behind the photo — clipped so it can't bleed onto the text column */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
            <div className="absolute inset-4 rounded-[2rem] bg-accent/25 blur-2xl" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-glow-accent"
          >
            

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border bg-panel">
              <img
                src="public/assets/img/profile.jpeg"
                alt="A.M. Riffath Hussain"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              
              {/* subtle gradient wash for contrast with the caption chip below */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border bg-black/40 px-3 py-2 backdrop-blur-md">
              <span className="font-mono text-[11px] text-white/90">
                Riffath Hussain
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent-text">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                available
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

