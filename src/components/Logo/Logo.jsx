import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Flex from '../Flex';

import logoSvg from '../../../static/assets/kekker_logo.svg';

const StyledLogoLink = styled(Link)`
  width: 100%;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLogoImg = styled.img`
  margin-bottom: 0;
  margin-top: -2%;
  margin-left: -6%;
  
  width: 200px;
  height: 100%;
  min-width: 100px;
`;

const LogoLink = () => (
    <StyledLogoLink to="/">
      <StyledLogoImg src={logoSvg} alt="Kekker logo" />
    </StyledLogoLink>
);

export default LogoLink;
