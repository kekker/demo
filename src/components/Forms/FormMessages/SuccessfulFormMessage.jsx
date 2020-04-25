import React from 'react';
import styled from 'styled-components';
import Text from '../../TextStyles/Text';

import arrowSvg from '../../../../static/assets/kekker_arrow.svg';
import Flex from '../../Flex';

const StyledArrowIconDiv = styled.div`
  flex-basis: 50px;
  margin-right: 1em;
  display: flex;

  @media screen and (max-width: 440px) {
    display: none;
  }
`;

const StyledArrowIcon = styled.img`
  margin-bottom: 0;
`;

const SuccessfulFormMessage = () => (
  <>
    <Flex alignItems="center">
      <StyledArrowIconDiv>
        <StyledArrowIcon src={arrowSvg} alt="Arrow Icon" />
      </StyledArrowIconDiv>
      <Text tag="div" isHeadingFont textTransform="uppercase" fontWeight={600}>
        Check your email for further instructions
      </Text>
    </Flex>

    <Text tag="div">
      If you have any questions, contact us at
      {' '}
      <a href="mailto:info@kekker.com">info@kekker.com</a>
    </Text>
  </>
);

export default SuccessfulFormMessage;
