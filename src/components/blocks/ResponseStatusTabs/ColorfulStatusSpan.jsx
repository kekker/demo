import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTabsContext } from '@reach/tabs';


const StyledStatusSpan = styled.span`
  padding: 5px;
  
  background-color: ${props => props.backgroundStatusColor};
  color: ${props => props.fontStatusColor};
  
  font-weight: ${props => (props.isSelected ? 800 : 300)};
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
`;

const ColorfulStatusSpan = ({ statusCode, index }) => {
  const { selectedIndex } = useTabsContext();
  const isSelected = selectedIndex === index;

  let backgroundStatusColor = 'rgb(255, 235, 230)';
  let fontStatusColor = 'rgb(191, 38, 0)';

  const codeString = statusCode.toString();
  if (codeString.startsWith('2')) {
    backgroundStatusColor = 'rgb(227, 252, 239)';
    fontStatusColor = 'rgb(0, 102, 68)';
  }
  if (codeString.startsWith('4') || codeString.startsWith('3')) {
    backgroundStatusColor = 'rgb(255, 240, 179)';
    fontStatusColor = 'rgb(23, 43, 77)';
  }

  return (
    <StyledStatusSpan
      isSelected={isSelected}
      backgroundStatusColor={backgroundStatusColor}
      fontStatusColor={fontStatusColor}
    >
      {statusCode}
    </StyledStatusSpan>
  );
};

ColorfulStatusSpan.propTypes = {
  statusCode: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default ColorfulStatusSpan;
