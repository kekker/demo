import Typography from 'typography';

const jsonTheme = require('../../content/theme');

const {
  headerFontFamily,
  bodyFontFamily,
  bodyWeight,
  headerWeight,
  baseFontSize,
  baseLineHeight,
} = jsonTheme;

const typography = new Typography({
  googleFonts: [
    {
      name: 'Rubik',
      styles: ['300', '600'],
    },
    {
      name: 'Heebo',
      styles: ['800', '900'],
    },
  ],
  baseFontSize,
  baseLineHeight,
  headerFontFamily,
  bodyFontFamily,
  bodyWeight,
  headerWeight,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
