module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        md: ['1rem', '1.5rem'],
      },
      colors: {
        light: {
          primary: {
            100: '#ffffff',
            200: 'rgba(235,235,245,0.6)',
            300: 'rgba(235,235,245,0.3)',
          },
          secondary: {
            100: '#ffffff',
            200: 'rgba(120,120,128,0.16)',
            300: 'rgba(120,120,128,0.12)',
          },
          tertiary: {
            100: '#DC2626',
            200: '#b91c1c',
          },
        },
        dark: {
          primary: {
            100: 'rgba(0,0,0,.8)',
            200: 'rgba(60,60,67,0.6)',
            300: 'rgba(60,60,67,0.3)',
          },
          secondary: {
            100: '#111827',
            200: 'rgba(17,24,39,0.82)',
            300: 'rgba(17,24,39,0.64)',
          },
          tertiary: {
            100: '#FECACA',
            200: '#FCA5A5',
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  safelist: [
    // "text-center",
    // "text-right",
    // "text-justify",
    // "text-sm",
    // "text-md",
    // "text-lg",
    // "text-xl",
    // "text-2xl",
    // "font-semibold",
  ],
}
