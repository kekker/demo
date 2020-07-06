import React from 'react';
import { Story, StoryRow } from '../StorybookComponents';

import TabBar from './TabBar';
import TabItem from './TabItem';

export default {
  title: 'TabBar',
};

export const Tabs = () => (
  <Story>
    <StoryRow heading="TabBar">
      <TabBar>
        <TabItem label="tab1">Content</TabItem>
        <TabItem label="tab2">Content</TabItem>
        <TabItem label="tab3">Content</TabItem>
      </TabBar>
    </StoryRow>
  </Story>
);
