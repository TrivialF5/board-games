// config active for tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // active: {
        //   sky: '#BAE6FD',
        //   amber: '#FFCD9C',
        //   emerald: '#00BFA5',
        //   slate: '#1D1F21',
        // },
        sky: {
          400: '#38BDF8',
          200: '#BAE6FD',
          // active: {
          //   200: '#BAE6FD',
          // },
        },
        amber: {
          400: '#FBBF24',
          200: '#FDE68A',
          // active: {
          //   200: '#ffecb3',
          // },
        },
        emerald: {
          400: '#34D399',
          200: '#A7F3D0',
          // active: {
          //   200: '#b2d9ff',
          // },
        },
        orange: {
          400: '#FB923C',
          200: '#FED7AA',
          // active: {
          //   200: '#ffecb3',
          // },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}