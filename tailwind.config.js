/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // => @media (min-width: 300px) { ... }
        'sm': '300px',
        'smm': '400px',
        // => @media (min-width: 500px) { ... }
        'smd': '500px',
        // => @media (min-width: 750px) { ... }
        'md': '750px',
        // => @media (min-width: 1440px) { ... }
        '900xx': '900px',
        'slg': '1000px',
        
        'lg': '1440px',
        '420x': {'min': '420px', 'max': '500px'},

        'smdx': {'max': '500px'},
        'mdx': {'max': '750px'},
        'smmx': {'max': '400px'},
        '900x': {'max': '900px'},

      },
    },
  },
  plugins: [],
}

