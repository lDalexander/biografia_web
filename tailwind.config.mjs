/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cyberbg:       '#05050a',
        cybercyan:     '#00f0ff',
        cybermagenta:  '#ff0055',
        cyberyellow:   '#fcee0a',
        cybergray:     '#1a1a2e',
        cyberdim:      '#0d0d1a',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono:     ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        flicker: {
          '0%, 100%':  { opacity: '1' },
          '8%':        { opacity: '0.85' },
          '9%':        { opacity: '1' },
          '42%':       { opacity: '1' },
          '43%':       { opacity: '0.7' },
          '44%':       { opacity: '1' },
          '70%':       { opacity: '1' },
          '71%':       { opacity: '0.9' },
          '72%':       { opacity: '0.6' },
          '73%':       { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 20px #00f0ff',
          },
          '50%': {
            boxShadow: '0 0 10px #00f0ff, 0 0 25px #00f0ff, 0 0 50px #00f0ff',
          },
        },
        'pulse-glow-magenta': {
          '0%, 100%': {
            boxShadow: '0 0 5px #ff0055, 0 0 10px #ff0055',
          },
          '50%': {
            boxShadow: '0 0 10px #ff0055, 0 0 25px #ff0055, 0 0 40px #ff0055',
          },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right': {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      animation: {
        flicker:              'flicker 4s infinite',
        'pulse-glow':         'pulse-glow 2s ease-in-out infinite',
        'pulse-glow-magenta': 'pulse-glow-magenta 2s ease-in-out infinite',
        scanline:             'scanline 6s linear infinite',
        'slide-up':           'slide-up 0.6s ease-out forwards',
        'slide-right':        'slide-right 0.6s ease-out forwards',
        blink:                'blink 1s step-end infinite',
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)
        `,
        'hero-gradient': 'linear-gradient(135deg, #05050a 0%, #0d0d1a 50%, #05050a 100%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      dropShadow: {
        'neon-cyan':    ['0 0 6px #00f0ff', '0 0 20px #00f0ff'],
        'neon-magenta': ['0 0 6px #ff0055', '0 0 20px #ff0055'],
        'neon-yellow':  ['0 0 6px #fcee0a', '0 0 20px #fcee0a'],
      },
    },
  },
  plugins: [],
};
