import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Text from '../../TextStyles/Text';

const ErrorDiv = styled.div`
  background-color: #f8d7da;
  padding: 1em;
  border-radius: 0.5em;
`;

const ErrorFormMessage = ({ errorMessage }) => {
  console.log('Error sending a form', errorMessage);
  return (
    <ErrorDiv>
      <Text tag="div" textTrensform="uppercase" fontWeight={600}>
        Sorry! We'have received an error trying to send a form
        {' '}
        <br />
        Please try again or contact us directly by
        {' '}
        <Link to="mailto:info@kekker.com">info@kekker.com</Link>
      </Text>
    </ErrorDiv>
  );
};

export default ErrorFormMessage;
