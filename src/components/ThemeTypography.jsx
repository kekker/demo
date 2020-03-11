import Typography from 'typography';

const jsonTheme = require('../../content/theme');

const {
  headerFontFamily,
  bodyFontFamily,
  bodyWeight,
  headerWeight,
  baseFontSize,
  baseLineHeight,
  googleFonts,
} = jsonTheme;

const typography = new Typography({
  googleFonts,
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
