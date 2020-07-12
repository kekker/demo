import { configure, addDecorator, addParameters } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import React from "react";

import Theme from '../src/components/Theme';
import typography from '../src/components/ThemeTypography';
import { PageStateProvider } from '../src/state/pageState';
import { AppStateProvider } from '../src/state/appState';

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.jsx$/), module);

addDecorator((story) => (
  <AppStateProvider>
      <Theme>
          <PageStateProvider>
              {story()}
          </PageStateProvider>
      </Theme>
  </AppStateProvider>
));

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent
// its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
};

typography.injectStyles();

