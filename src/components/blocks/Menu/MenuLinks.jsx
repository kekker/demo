import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Text from '../../fragments/TextStyles/Text';
import getPageTitleFromPathname from '../../../utils/getPageTitleFromPathname';

const StyledMenuLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-weight: ${({ isActive }) => (isActive ? 900 : 400)};
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  
  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  }
`;

const StyledUl = styled.ul`
  margin: 0;
`;

const StyledLi = styled.li`
  margin: 10px 0;
  
  &::before {
    display: none;
  }
`;

const MenuLinks = ({ links, location }) => {
  const mappedLinks = links.map(link => {
    const currentPageLinkTitle = getPageTitleFromPathname(location);

    const isActive = currentPageLinkTitle === link.title.toLowerCase();

    return (
      <StyledLi key={link.title}>
        <StyledMenuLink isActive={isActive} to={link.to}>
          <Text
            fontSize="medium"
            tag="p"
            color="primaryText"
            textAlign="left"
            lineHeight="1.2em"
          >
            {link.title}
          </Text>
        </StyledMenuLink>
      </StyledLi>
    );
  });

  return (
    <StyledUl>
      {mappedLinks}
    </StyledUl>
  );
};

export default MenuLinks;
