/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      
      'tablet': '640px',
      
      'laptop': '900px',
      
      'desktop': '1280px',
      
    },
    colors : {
     primaryDark :  "#1A9126" ,
     primaryLight : "#3EDE4E" ,
     secondaryLight : "#DE8128" ,
     secondaryDark : "#915821" ,
     ternary : "#7B54DE"
    }  ,
     extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
