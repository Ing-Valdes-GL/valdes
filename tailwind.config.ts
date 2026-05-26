import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:   '#111111',
        light:  '#E8E8E8',
        mid:    '#555555',
        border: '#CCCCCC',
      },
      fontFamily: {
        sans:    ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        mono:    ['monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
      },
    },
  },
  plugins: [],
}

export default config
