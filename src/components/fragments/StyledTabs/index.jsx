import React from 'react';
import styled from 'styled-components';
import {
  TabPanel, Tab, Tabs, TabList, useTabsContext,
} from '@reach/tabs';


export const StyledTabs = styled(Tabs)`
  max-width: 55vw;
`;

export const StyledTabList = styled(TabList)`
  display: flex;
`;

export const StyledTabPanel = styled(TabPanel)`
  border: 1px solid #EDEDED;
  border-radius: 0 0 5px 5px;
  position: relative;
  top: -1px;
  
  & pre {
    margin-bottom: 0;
  }
`;

export const StyledStyledTab = styled(Tab)`
  flex: 1;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.bodyLightGrey : '#FFF')};
  border: 1px solid #EDEDED;
  padding: 10px 15px;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
`;


export function StyledTab({ index, ...props }) {
  // get the currently selected index from useTabsContext
  const { selectedIndex } = useTabsContext();
  const isSelected = selectedIndex === index;

  return (
    <StyledStyledTab
      {...props}
      isActive={isSelected}
    />
  );
}
