import React from 'react';
import { AppStateProvider } from './src/state/appState';
import { PageStateProvider } from './src/state/pageState';

export const wrapRootElement = ({ element }) => (
  <AppStateProvider>{ element }</AppStateProvider>
);