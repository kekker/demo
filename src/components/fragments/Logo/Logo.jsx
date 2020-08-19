import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Flex from '../Flex';

import logoSvg from '../../../../static/assets/kekker_logo_white.svg';

const StyledLogoLink = styled(Link)`
  width: 100%;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLogoImg = styled.img`
  margin-bottom: 0;
  
  width: 180px;
  height: 100%;
  min-width: 100px;
`;

const LogoLink = () => (
  <StyledLogoLink to="/">
    <StyledLogoImg src={logoSvg} alt="Kekker logo" />
  </StyledLogoLink>
);

export default LogoLink;
