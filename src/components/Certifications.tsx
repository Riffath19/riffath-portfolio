import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/experience'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-text">05</span>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Certifications
          </h2>
          <span className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col gap-4 rounded-2xl p-5 transition-shadow hover:shadow-glow-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10 text-signal">
                <Award size={18} />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold leading-snug text-ink">
                  {cert.title}
                </h3>
                <p className="mt-1.5 font-mono text-[11px] text-ink-muted">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
