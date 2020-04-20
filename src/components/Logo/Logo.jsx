import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Flex from '../Flex';

import logoSvg from '../../../static/assets/kekker_logo.svg';

const StyledLogoLink = styled(Link)`
  width: 100%;
  padding: 0;
`;

const StyledLogoImg = styled.img`
  margin-bottom: 0;
  margin-top: 0;
  margin-left: -13px;
  
  width: 200px;
  height: 45px;
  min-width: 100px;
`;

const LogoLink = () => (
    <StyledLogoLink to="/">
      <StyledLogoImg src={logoSvg} alt="Kekker logo" />
    </StyledLogoLink>
);

export default LogoLink;
