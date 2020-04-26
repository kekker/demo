import React from 'react';
import styled from 'styled-components';
import Text from '../../TextStyles/Text';

import Flex from '../../Flex';

const StyledLink = styled.a`
  color: #000000;
`;

const SuccessfulFormMessage = () => (
  <>
    <Flex alignItems="center">
      <Text tag="div" isHeadingFont textTransform="uppercase" fontWeight={600}>
        Check your email for further instructions
      </Text>
    </Flex>

    <Text tag="div">
      If you have any questions, contact us at
      {' '}
      <StyledLink href="mailto:info@kekker.com">info@kekker.com</StyledLink>
    </Text>
  </>
);

export default SuccessfulFormMessage;
