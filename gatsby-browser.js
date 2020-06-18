import React from 'react';
import { AppStateProvider } from './src/state/appState';
import { PageStateProvider } from './src/state/pageState';

import './src/styles/global.css';
import './src/styles/gatsby-code.css';
import 'prismjs/themes/prism-solarizedlight.css';

export const wrapRootElement = ({ element }) => (
  <AppStateProvider>{ element }</AppStateProvider>
);
