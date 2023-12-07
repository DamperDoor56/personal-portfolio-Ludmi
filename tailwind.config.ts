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
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'dark-blue': '#1C1D26',
        'aqua-green' : '#55B8C4'
      },
      fontFamily: {
        'gothic': "Pathway Gothic One"
      }
    },
  },
plugins: [
  addVariantPlugin
],
}
export default config
