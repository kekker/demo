import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// nav-item
const StyledNavButton = styled.button`
  flex: 1;
  background-color: ${({ isActive }) => (isActive ? '#7CC6FE' : '#FFF')};
  border: 1px solid #EDEDED;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
`;

const TabNav = ({ navLabel, onChangeActiveTab, isActive }) => (
  <StyledNavButton
    isActive={isActive}
    type="button"
    onClick={() => { onChangeActiveTab(navLabel); }}
  >
    {navLabel}
  </StyledNavButton>
);

TabNav.propTypes = {
  isActive: PropTypes.bool,
  navLabel: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired
};

TabNav.defaultProps = {
  isActive: false
};

export default TabNav;
