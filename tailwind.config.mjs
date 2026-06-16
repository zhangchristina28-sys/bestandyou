import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#243027',
        moss: '#55745f',
        leaf: '#8aa37f',
        linen: '#f7f3ec',
        oat: '#e7ded0',
        clay: '#b8795f',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'ui-serif', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(36, 48, 39, 0.08)',
      },
    },
  },
  plugins: [typography],
};
