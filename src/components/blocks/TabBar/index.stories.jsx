import React from 'react';
import styled from 'styled-components';
import { Story, StoryRow } from '../../storybook';

import TabBar from './TabBar';
import TabItem from './TabItem';

export default {
  title: 'TabBar',
};

const TabContentWrapper = styled.div`
  width: 800px;
  height: 400px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabBarStory = () => (
  <Story>
    <StoryRow heading="TabBar">
      <TabBar>
        <TabItem label="Quorum">
          <TabContentWrapper>
            <span>Quorum Content</span>
          </TabContentWrapper>
        </TabItem>
        <TabItem label="Ethereum">
          <TabContentWrapper>
            Ethereum Content
          </TabContentWrapper>
        </TabItem>
        <TabItem label="Hyperledger">
          <TabContentWrapper>
            Hyperledger Content
          </TabContentWrapper>
        </TabItem>
      </TabBar>
    </StoryRow>
  </Story>
);
