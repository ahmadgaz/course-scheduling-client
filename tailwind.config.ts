import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#F1B947',
      secondary: '#77A4D7',
      accent: '#B7D0ED',
      background: '#FFFFFF',
      text: '#14100C',
      neutral: '#A4A4A4',
      important: '#A60000',
      highlight: '#F1F1F1',
      good: '#12DAA9',
      ok: '#FD9F1E',
      bad: '#FF5353',
      border: '#E5E5E580',
      'hovered-border': '#FFFFFF80',
    },
    fontSize: {
      subtitle: ['13px', { lineHeight: '18px', fontWeight: 700 }],
      'out-of': [
        '40px',
        { lineHeight: '76px', letterSpacing: '-0.05em', fontWeight: 300 },
      ],
      rating: [
        '72px',
        { lineHeight: '76px', letterSpacing: '-0.05em', fontWeight: 800 },
      ],
      'title-bold': [
        '34px',
        { lineHeight: '41px', letterSpacing: '-0.05em', fontWeight: 800 },
      ],
      title: [
        '34px',
        { lineHeight: '41px', letterSpacing: '-0.05em', fontWeight: 700 },
      ],
      heading: ['17px', { lineHeight: '22px', fontWeight: 600 }],
      subheading: ['15px', { lineHeight: '20px', fontWeight: 300 }],
      'body-bold': ['17px', { lineHeight: '22px', fontWeight: 700 }],
      body: ['17px', { lineHeight: '22px', fontWeight: 400 }],
      button: ['16px', { letterSpacing: '-0.05em', fontWeight: 700 }],
      tag: ['16px', { fontWeight: 400 }],
      caption: ['12px', { fontWeight: 400 }],
    },
    extend: {
      boxShadow: {
        paper: '0px 4px 17px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        10: '17px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents, addUtilities }) {
      addUtilities({
        '.animation': {
          '@apply transition-all duration-100 ease-in-out': {},
        },
        '.max-width': {
          '@apply w-full max-w-[1076px]': {},
        },
      });
    }),
  ],
};
export default config;
