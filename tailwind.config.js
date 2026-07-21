/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--bg)',
        panel: 'var(--bg-panel)',
        raised: 'var(--bg-raised)',
        border: 'var(--border)',
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
          faint: 'var(--ink-faint)',
        },
        accent: {
          DEFAULT: '#2DD9C5',
          dim: '#1B7F73',
          soft: 'rgba(45, 217, 197, 0.12)',
          text: 'var(--accent-text)',
        },
        signal: {
          DEFAULT: '#F5A524',
          soft: 'rgba(245, 165, 36, 0.12)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(231,237,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(231,237,244,0.04) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(45,217,197,0.15), transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-accent': '0 0 40px -10px rgba(45, 217, 197, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
