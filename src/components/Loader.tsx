import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  isLoading: boolean
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="font-mono text-sm tracking-[0.3em] text-accent-text"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            AMRH
          </motion.div>
          <div className="mt-6 h-px w-40 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-accent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            className="mt-4 font-mono text-xs text-ink-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            booting portfolio.exe
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
