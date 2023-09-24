import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:  {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-gradient': 'linear-gradient(#ffcf23, #ff8d3a)',
        'icon-button': 'linear-gradient(145deg, rgba(254,223,88,1) 0%, rgba(245,193,52,1) 100%)',
        'divider': 'radial-gradient(circle, #fff 23%, #000)',
        'faq-gradient': 'linear-gradient(rgba(31, 31, 39, .79), rgba(45, 45, 54, .79))'
      },
      boxShadow: {
        'main': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
        
      },
      colors: {
        'main': {
          200: '#ffbb38',
          100: '#6AB187'
        },
        'secondary': {
          200: '#181b21',
          150: 'rgba(255, 255, 255, .74)',
          100: '#1F3F49',
          50: '#0B0E13'
        },
        nuetral: {
          100: 'rgba(255, 255, 255, .34)'
        },
        success: {
          100: '#71da79'
        },
        error: {
          100: '#D32D41'
        }

      }
    },
  },
  plugins: [],
}
export default config
