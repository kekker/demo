import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Flex from '../../fragments/Flex';
import Text from '../../fragments/TextStyles/Text';


const StyledProgressBar = styled.div`
  position: relative;
  
  width: calc(${({ fill }) => (fill || '100%')});
  height: 32px;
  
  margin-bottom: 10px;
  
  background-color: ${({ color }) => color};
  
  &::after {
    display: block;
    content: "";
    position: absolute;
    
    top: 0;
    right: -10px;
    
    width: 0;
    height: 0;
    
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 10px solid ${({ color }) => color};
  }
`;

const ProgressFlex = styled(Flex)`
  position: absolute;
  z-index: 2;
  
  width: calc(${({ fill }) => (fill || '100%')});
  height: 32px;
  
  top: 0;
`;

const BenefitsProgressBar = ({ price, icon, fill }) => (
  <StyledProgressBar color="#8CD52F">

    <StyledProgressBar
      style={{ position: 'absolute', zIndex: 1 }}
      color="#D52F2F"
      fill={fill}
    />

    <ProgressFlex
      justifyContent="space-between"
      p="4px 2px 4px 8px"
      alignItems="center"
      flexDirection="row"
    >
      <Text
        fontSize="medium"
        color="invertedText"
        fontWeight={800}
        tag="div"
      >
        {price}
      </Text>

      <img style={{ height: '100%', margin: 0 }} src={icon} alt="" />
    </ProgressFlex>

  </StyledProgressBar>
);

BenefitsProgressBar.propTypes = {
  price: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  fill: PropTypes.string
};

BenefitsProgressBar.defaultProps = {
  fill: '100%'
};

export default BenefitsProgressBar;
