import React from 'react';
import {
  TabList, TabPanel, TabPanels
} from '@reach/tabs';

import { Story } from '../StorybookComponents';

import { AnimatedTabs, AnimatedTab } from './index';

export default {
  title: 'Animated Tabs',
};

export const AnimatedTabsStory = () => (
  <Story>
    <div style={{ maxWidth: '800px' }}>

      <AnimatedTabs color="red" style={{ width: 400 }}>
        <TabList style={{ justifyContent: 'space-around' }}>
          <AnimatedTab index={0} style={{ flex: 1 }}>
            The First
          </AnimatedTab>
          <AnimatedTab index={1} style={{ flex: 2 }}>
            This has longer text
          </AnimatedTab>
          <AnimatedTab index={2} style={{ flex: 1 }}>
            Three
          </AnimatedTab>
        </TabList>
        <TabPanels style={{ padding: 10 }}>
          <TabPanel>
            <p>Check it out! It&amp;s ~animated~</p>
          </TabPanel>
          <TabPanel>
            <p>Yeah yeah. What&amp;s up?</p>
          </TabPanel>
          <TabPanel>
            <p>Oh, hello there.</p>
          </TabPanel>
        </TabPanels>
      </AnimatedTabs>

    </div>
  </Story>
);
