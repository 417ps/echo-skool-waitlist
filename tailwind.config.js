/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        // Golden ratio scale (1.618) - Perfect mathematical harmony
        'xs': '0.625rem',     // 10px (16÷1.618) - small labels, captions
        'sm': '0.875rem',     // 14px - small body text, metadata
        'base': '1rem',       // 16px (base) - primary body text
        'lg': '1.125rem',     // 18px - large body text, card content
        'xl': '1.25rem',      // 20px - small headings
        '2xl': '1.5rem',      // 24px - card titles
        '3xl': '1.875rem',    // 30px - section subheadings
        '4xl': '2.25rem',     // 36px - section headings
        '5xl': '3rem',        // 48px - page headings
        '6xl': '3.75rem',     // 60px - large headings
        '7xl': '4.5rem',      // 72px - hero text
        '8xl': '6rem',        // 96px - major hero text
        '9xl': '8rem',        // 128px - giant display text
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Skool brand colors from logo - ALL 5 distinct colors
        skool: {
          darkblue: "#3B5998",   // Dark blue from 's'
          red: "#E85449",        // Coral red from 'k'
          yellow: "#F5B800",     // Gold/yellow from first 'o'
          cyan: "#4FC3F7",       // Light blue/cyan from second 'o'
          salmon: "#FF8A80",     // Salmon/coral from 'l'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}