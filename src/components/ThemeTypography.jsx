import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Rubik',
      styles: [
        '300',
        '600'
      ],
    },
    {
      name: 'Heebo',
      styles: [
        '800',
        '900'
      ]
    }
  ],
  headerFontFamily: [
    'Heebo',
    'Roboto',
    'Arial',
    'sans-serif',
  ],
  headerWeight: '900',
  bodyFontFamily: ['Rubik', 'Open Sans', 'Arial', 'sans-serif'],
  bodyWeight: '300'
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
