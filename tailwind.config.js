/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class', // bascule activée par le hook useTheme (classe sur <html>)
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        accent: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(120deg, #22d3ee 0%, #6366f1 45%, #a855f7 100%)',
        'accent-gradient-soft':
          'linear-gradient(120deg, rgba(34,211,238,0.16) 0%, rgba(99,102,241,0.16) 45%, rgba(168,85,247,0.16) 100%)',
      },
      boxShadow: {
        glow: '0 0 45px -12px rgba(34, 211, 238, 0.45)',
        'glow-violet': '0 0 45px -12px rgba(168, 85, 247, 0.45)',
        card: '0 20px 45px -25px rgba(15, 23, 42, 0.45)',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(320%)' },
        },
        'pulse-ring': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34, 211, 238, 0.45)' },
          '50%': { boxShadow: '0 0 0 9px rgba(34, 211, 238, 0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'marquee-x': 'marquee-x 28s linear infinite',
        shimmer: 'shimmer 1.2s ease-out',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
