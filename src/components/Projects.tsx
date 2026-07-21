import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Boxes } from 'lucide-react'
import { projects, allCategories } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState<string>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-text">03</span>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Featured Projects
          </h2>
          <span className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-2">
          {['All', ...allCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
                filter === cat
                  ? 'border-accent bg-accent/10 text-accent-text'
                  : 'border-border text-ink-muted hover:border-accent/40 hover:text-accent-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass group flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-glow-accent"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/10 via-transparent to-signal/10">
                  <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
                  <Boxes
                    size={40}
                    className="relative text-accent/70 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent-text">
                    {project.tagline}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent-text"
                    >
                      <Github size={13} />
                      Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-2 font-mono text-xs text-accent-text transition-colors hover:bg-accent/20"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 font-mono text-xs text-ink-faint">
                        {project.metric}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
