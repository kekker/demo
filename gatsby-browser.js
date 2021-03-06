import React from 'react';
import { AppStateProvider } from './src/state/appState';
import Theme from './src/components/Theme';

import './src/styles/global.css';
import './src/styles/gatsby-code.css';

// When changing theme also change it in .babelrc
import 'prismjs/themes/prism.css';


export const wrapRootElement = ({ element }) => (
  <AppStateProvider>
    <Theme>
      { element }
    </Theme>
  </AppStateProvider>
);
