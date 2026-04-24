/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // CyberWerkSuite brand — mirrors main site (src/index.css :root)
        // primary: shield-navy 220 65% 20%  |  accent: copper 25 80% 50%
        primary: {
          DEFAULT: "hsl(220 65% 20%)",
          glow:    "hsl(220 55% 35%)",
          dark:    "hsl(220 65% 14%)",
        },
        accent: {
          DEFAULT: "hsl(25 80% 50%)",
          light:   "hsl(25 70% 58%)",
          soft:    "hsl(25 80% 50% / 0.12)",
        },
        ink:     "hsl(220 30% 12%)",
        muted:   "hsl(220 12% 50%)",
        surface: "hsl(0 0% 100%)",
        subtle:  "hsl(220 18% 97%)",
        border:  "hsl(220 20% 88%)",
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:       '0 4px 24px -4px hsl(220 65% 20% / 0.12)',
        'card-hover':'0 12px 40px -8px hsl(220 65% 20% / 0.22)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, hsl(220 65% 14%), hsl(220 15% 18%))',
        'gold-gradient': 'linear-gradient(135deg, hsl(40 90% 55%), hsl(25 80% 50%))',
      },
    },
  },
  plugins: [],
};
