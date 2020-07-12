import React from 'react';
import { AppStateProvider } from './src/state/appState';
import Theme from './src/components/Theme';

export const wrapRootElement = ({ element }) => (
  <AppStateProvider>
    <Theme>
      { element }
    </Theme>
  </AppStateProvider>
);