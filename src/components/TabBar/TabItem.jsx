import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { usePageState } from '../../state/pageState';

const StyledTabItem = styled.div`
  height: ${({ isActive }) => (isActive ? 'auto' : 0)};
  overflow: hidden;
`;

const TabItem = ({
  children, label
}) => {
  const { pageState } = usePageState();
  const { ActiveTab } = pageState;
  const isActive = ActiveTab === label;
  const TabLabel = label;

  return (
    <StyledTabItem isActive={isActive}>
      { React.Children.map(children, child => React.cloneElement(child, { TabLabel })) }
    </StyledTabItem>
  );
};

TabItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TabItem.defaultProps = {
  children: null,
};

export default TabItem;
