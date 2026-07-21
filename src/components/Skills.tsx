import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-text">02</span>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Skills &amp; Technologies
          </h2>
          <span className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-5 transition-shadow hover:shadow-glow-accent"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-ink">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  {group.note}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
                    className="rounded-lg border border-border bg-white/[0.02] px-2.5 py-1.5 font-mono text-xs text-ink-muted transition-colors group-hover:border-accent/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
