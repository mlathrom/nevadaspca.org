module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: {
    content: ['./src/**/*.html', './templates/**/*.twig', './src/**/*.vue'],
    options: {
      safelist: [
        '/-move$/',
        '/-enter$/',
        '/-enter-active$/',
        '/-leave-to$/',
        '/-leave-active$/',
      ],
    },
  },
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      padding: {
        14: '3.5rem',
      },
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        50: '50ms',
      },
      inset: {
        '-px': '-1px',
        4: '1rem',
        8: '2rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        full: '100%',
      },
      screens: {
        xs: '400px',
        sm: '600px',
        md: '800px',
        lg: '1000px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
      },
      maxWidth: {
        'screen-xs': '320px',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1440px',
        'screen-3xl': '1600px',
      },
      maxHeight: {
        xs: '16rem',
        sm: '20rem',
        md: '24rem',
        lg: '28rem',
        xl: '32rem',
        '2xl': '46rem',
        '3xl': '42rem',
        '4xl': '48rem',
        '5xl': '56rem',
        '6xl': '64rem',
        none: 'none',
      },
      minHeight: {
        xs: '16rem',
        sm: '20rem',
        md: '24rem',
        lg: '28rem',
        xl: '32rem',
        '2xl': '46rem',
        '3xl': '42rem',
        '4xl': '48rem',
        '5xl': '56rem',
        '6xl': '64rem',
        none: 'none',
      },
      width: {
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      height: {
        14: '3.5rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
      },
      container: false,
      colors: {
        brand: {
          green: '#71BC8B',
          'green-dark': '#23381D',
          yellow: '#F1D382',
          peach: '#FFF3E4',
          'peach-dark': '#EFE4D6',
          pink: '#E8849B',
          blue: '#9DD8E6',

        },
        green: {
          DEFAULT: '#46A874',
          '50': '#E1F2E9',
          '100': '#CFEBDC',
          '200': '#ABDCC2',
          '300': '#87CDA8',
          '400': '#63BE8E',
          '500': '#46A874',
          '600': '#37845B',
          '700': '#286042',
          '800': '#193C29',
          '900': '#0A1811'
        },
        yellow: {
          DEFAULT: '#E47E00',
          '50': '#FFE8CB',
          '100': '#FFDCB1',
          '200': '#FFC57E',
          '300': '#FFAE4B',
          '400': '#FF9818',
          '500': '#E47E00',
          '600': '#B16200',
          '700': '#7E4600',
          '800': '#4B2900',
          '900': '#180D00'
        },
        red: {
          DEFAULT: '#EF445B',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FBD1D7',
          '300': '#F7A2AD',
          '400': '#F37384',
          '500': '#EF445B',
          '600': '#EB1532',
          '700': '#BD1027',
          '800': '#8E0C1D',
          '900': '#5F0814'
        },
      },
    },
  },

  variants: {
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'visited',
      'checked',
    ],
    borderWidth: ['first'],
  },
  plugins: [require('@tailwindcss/typography')],
};
