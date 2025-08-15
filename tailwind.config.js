/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        reflect: {
          dark: '#0a0a0f',
          'dark-blue': '#0f0f23',
          'deep-blue': '#1a1a2e',
          purple: '#6366f1',
          'purple-light': '#8b5cf6',
          'purple-dark': '#4c1d95',
          accent: '#ec4899',
          text: '#e2e8f0',
          'text-muted': '#94a3b8',
          'text-dim': '#64748b',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'reflect-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f23 100%)',
        'purple-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'scale-in': 'scaleIn 0.6s ease-out',
        'hero-title': 'heroTitle 1.2s ease-out',
        'hero-subtitle': 'heroSubtitle 1s ease-out 0.3s both',
        'hero-badge': 'heroBadge 0.8s ease-out 0.1s both',
        'hero-demo': 'heroDemo 1s ease-out 0.6s both',
        'aurora': 'aurora 8s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)', filter: 'brightness(1)' },
          '50%': { boxShadow: '0 0 60px rgba(99, 102, 241, 0.8)', filter: 'brightness(1.2)' },
          '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)', filter: 'brightness(1)' },
        },
        glowPulse: {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(1)',
            filter: 'blur(20px)'
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.1)',
            filter: 'blur(30px)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        heroTitle: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px) scale(0.9)',
            filter: 'blur(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)'
          },
        },
        heroSubtitle: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        heroBadge: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px) scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        heroDemo: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        aurora: {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'translateX(-10%) rotate(-5deg) scale(1)',
          },
          '33%': {
            opacity: '0.8',
            transform: 'translateX(0%) rotate(0deg) scale(1.05)',
          },
          '66%': {
            opacity: '0.5',
            transform: 'translateX(10%) rotate(5deg) scale(0.95)',
          },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
