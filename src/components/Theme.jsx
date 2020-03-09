import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  colors: {
    primaryBrand: '#ffde00',
    primaryText: '#000000',
    secondaryText: '#000000',
    primaryLight: '#ffffff',
    primaryDark: '#353434',
    secondaryDark: '#535252',
    linkColor: '#0e3ca1',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
