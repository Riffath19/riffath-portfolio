import { motion } from 'framer-motion'
import { GraduationCap, Server, Cloud, Layers } from 'lucide-react'

const FOCUS_AREAS = [
  { icon: Server, label: 'Backend Engineering' },
  { icon: Layers, label: 'Distributed Systems' },
  { icon: Cloud, label: 'Cloud & DevOps' },
  { icon: GraduationCap, label: 'Full-Stack Development' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-text">01</span>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            About Me
          </h2>
          <span className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed text-ink"
          >
            I am a Software Engineering undergraduate at the{' '}
            <span className="text-ink">
              University of Westminster (IIT Colombo)
            </span>{' '}
            with a strong interest in backend engineering, distributed
            systems, cloud technologies, DevOps, and full-stack development.
            I enjoy designing scalable software solutions and building
            enterprise-grade applications that solve real-world problems.
          </motion.p>

          <div className="grid grid-cols-2 gap-3">
            {FOCUS_AREAS.map((area, i) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass flex flex-col items-start gap-3 rounded-2xl p-4"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-text">
                  <area.icon size={16} />
                </span>
                <span className="text-sm font-medium text-ink">
                  {area.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
