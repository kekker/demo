import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabItem = styled.div`
  height: ${({ isActive }) => (isActive ? 'auto' : 0)};
  overflow: hidden;
`;

const TabItem = ({
  children, label, activeTab
}) => {
  const isActive = activeTab === label;

  return (
    <StyledTabItem isActive={isActive}>
      {children}
    </StyledTabItem>
  );
};

TabItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string,
};

TabItem.defaultProps = {
  children: null,
  activeTab: '',
};

export default TabItem;
