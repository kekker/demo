import React from 'react';
import styled from 'styled-components';
import Text from '../../TextStyles/Text';

import arrowSvg from '../../../../static/assets/kekker_arrow.svg';
import Flex from '../../Flex';

const StyledArrowIconDiv = styled.div`
  flex-basis: 105px;
  margin-left: -1em;
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
        Thank you for your request.
        {' '}
        <br />
        Please, check your mail.
        {' '}
        <br />
        Further instructions have been sent to you.
      </Text>
    </Flex>

    <Text tag="div">
      If you have any questions, contact us on
      {' '}
      <a href="mailto:info@kekker.com">info@kekker.com</a>
    </Text>
  </>
);

export default SuccessfulFormMessage;
