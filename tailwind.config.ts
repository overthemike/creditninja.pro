import { fontFamily } from 'tailwindcss/defaultTheme'
import tailwindCssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          '900': '#0B1120'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: 0
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: 0
          }
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)'
          }
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)'
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)'
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)'
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'shimmer-slide':
          'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear'
      }
    }
  },
  plugins: [tailwindCssAnimate]
}

export default config
