import type { Config } from 'tailwindcss'

const addVariantPlugin = 
  function ({ addVariant }: {addVariant: Function}) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xsm: '0px',
      sm: '480px',
      md: '768px',
      lg: '1200px',
      lx: '1900px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      colors:{
        'dark-blue': '#1C1D26',
        'aqua-green' : '#55B8C4',
        'background-gray': '#272833',
        'lily': '#BE8EFB'
      },
      fontFamily: {
        'gothic': "Pathway Gothic One",
        'raleway': "Railway"
      }
    },
  },
plugins: [
  addVariantPlugin
],
}
export default config
