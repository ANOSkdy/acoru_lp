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
        accent: '#0071e3',
        'accent-h': '#0077ed',
        ink: '#1d1d1f',
        'ink-2': '#6e6e73',
        'ink-3': '#a1a1a6',
        canvas: '#ffffff',
        'canvas-2': '#f5f5f7',
        'canvas-3': '#e8e8ed',
        stroke: '#d2d2d7',
        'stroke-2': '#424245',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          'Meiryo',
          'sans-serif',
        ],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.08' }],
        headline: ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15' }],
        'title-lg': ['1.3125rem', { lineHeight: '1.35' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.75' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],
      },
      maxWidth: {
        container: '1120px',
        prose: '720px',
      },
    },
  },
  plugins: [],
}

export default config
