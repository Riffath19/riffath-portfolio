import { motion } from 'framer-motion'
import { Trophy, Calculator, HeartHandshake, ShieldCheck } from 'lucide-react'
import { leadership } from '../data/experience'

const ICONS = [Trophy, Calculator, HeartHandshake, ShieldCheck]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-text">04</span>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Experience &amp; Leadership
          </h2>
          <span className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-border sm:block" />
          <div className="space-y-4">
            {leadership.map((item, i) => {
              const Icon = ICONS[i % ICONS.length]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass relative flex items-start gap-4 rounded-2xl p-5 sm:ml-0"
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-text">
                    <Icon size={17} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base font-semibold text-ink">
                        {item.title}
                      </h3>
                      <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-xs text-accent-text">{item.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
