import React from 'react';
import { Link} from 'gatsby';
import styled from 'styled-components';
import Flex from '../Flex';

import logoSvg from '../../../static/assets/kekker_logo.svg';

const StyledLogoLink = styled(Link)`
  max-width: 205px;
  min-width: 100px;
  width: 100%;
  display: block;
`;

const StyledLogoImg = styled.img`
    margin-bottom: 0;
    margin-left: -6%;
`;


const LogoLink = () => (
      <Flex flexBasis="20%">
        <StyledLogoLink to="/">
          <StyledLogoImg src={logoSvg} alt="Kekker logo" />
        </StyledLogoLink>
      </Flex>
);

export default LogoLink;
