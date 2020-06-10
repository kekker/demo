import './src/styles/global.css';
import './src/styles/gatsby-code.css';

import React from 'react';
import { AppStateProvider } from './src/appState/appState';
import valuesStateReducer, { initialState } from './src/appState/appReducer';


require('prismjs/themes/prism-solarizedlight.css');

export const wrapRootElement = ({ element }) => (
  <AppStateProvider
    reducer={valuesStateReducer}
    initialState={initialState}
  >
    {element}
  </AppStateProvider>
);
