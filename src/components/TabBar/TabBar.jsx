import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TabNav from './TabNav';
import { usePageState } from '../../state/pageState';

const StyledTabBar = styled.div`
   max-width: 55vw;
  
  
    @media (max-width: 980px) {
        max-width: 90vw;
    }
  }
`;

const StyledTabNavContainer = styled.div`
  position: relative;
  display: flex;
`;

const StyledTabContainer = styled.div`
  border: 1px solid #EDEDED;
  border-radius: 0 0 5px 5px;
  position: relative;
  top: -1px;
  
  & pre {
    margin-bottom: 0;
  }
`;

const TabBar = ({ children }) => {
  const getChildrenLabels = elements => elements.map(({ props }) => props.label);

  const { pageState, pageDispatch } = usePageState();
  const { ActiveTab } = pageState;

  const setActiveTabFunc = currentTab => {
    if (currentTab !== ActiveTab) {
      pageDispatch({ type: 'SET_ACTIVE_TAB', value: currentTab });
    }
  };

  const renderTabs = () => getChildrenLabels(children).map(navLabel => (
    <TabNav
      key={navLabel}
      navLabel={navLabel}
      isActive={ActiveTab === navLabel}
      onChangeActiveTab={setActiveTabFunc}
    />
  ));

  return (
    <StyledTabBar>
      <StyledTabNavContainer>
        { renderTabs() }
      </StyledTabNavContainer>
      <StyledTabContainer>
        { children }
      </StyledTabContainer>
    </StyledTabBar>
  );
};

TabBar.propTypes = {
  children: PropTypes.node
};

TabBar.defaultProps = {
  children: null
};

export default TabBar;
