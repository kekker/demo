import React from 'react';
import { AppStateProvider } from './src/appState';

export const wrapRootElement = ({ element }) => (
  <AppStateProvider>{ element }</AppStateProvider>
);
