import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const jsonTheme = require('../../content/theme');

const Theme = ({ children }) => (
  <ThemeProvider theme={jsonTheme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
