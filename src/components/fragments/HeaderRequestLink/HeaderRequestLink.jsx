import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from '../TextStyles/Heading';
import getLinksAnchorFromMethodString from '../../../utils/getLinksAnchorNameFromMethodString';


const StyledLink = styled.a`
  margin-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textLightGrey};
  text-decoration: none;
`;

const StyledMethod = styled.span`
  padding: 0 10px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.primaryBrand};
`;

const HeaderRequestLink = ({ title }) => {
  const [method, link] = title.split(' ');
  const referenceLink = getLinksAnchorFromMethodString(title);

  return (
    <StyledLink name={referenceLink}>
      <Heading
        mb={1}
        level={1}
        fontSize={{ _: '25px', sm: '30px' }}
        fontWeight="900"
      >
        <StyledMethod>{method}</StyledMethod>
        {link}
      </Heading>
    </StyledLink>
  );
};

HeaderRequestLink.propTypes = {
  title: PropTypes.string.isRequired
};

export default HeaderRequestLink;
