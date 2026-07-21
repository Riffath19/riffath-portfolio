import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react'

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'imusthafa24@gmail.com',
    href: 'mailto:imusthafa24@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/riffath-hussain-83205b227',
    href: 'https://www.linkedin.com/in/riffath-hussain-83205b227',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Riffath19',
    href: 'https://github.com/Riffath19',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-text">06</span>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Let&rsquo;s Connect
          </h2>
          <span className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="glass grid grid-cols-1 gap-8 rounded-3xl p-8 sm:p-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Building something worth
              <br />
              <span className="text-gradient">shipping? Let&rsquo;s talk.</span>
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
              Open to Software Engineering internships and backend / distributed
              systems roles. Reach out directly, or connect on LinkedIn and
              GitHub.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-ink-muted">
              <MapPin size={13} className="text-accent-text" />
              Sri Lanka
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between rounded-xl border border-border bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-text">
                    <link.icon size={15} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {link.label}
                    </p>
                    <p className="text-sm text-ink">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-ink-faint transition-colors group-hover:text-accent-text"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
