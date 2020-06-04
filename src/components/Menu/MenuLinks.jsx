import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Text from '../TextStyles/Text';
import getPageTitleFromPathname from '../../utils/getPageTitleFromPathname';


const MenuWrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledMenuLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-weight: ${({ isActive }) => (isActive ? 900 : 400)};
  
  &:hover {
    text-decoration: underline;
  }
`;

const MenuLinks = ({ links, location }) => {
  const mappedLinks = links.map(link => {
    const currentPageLinkTitle = getPageTitleFromPathname(location);

    const isActive = currentPageLinkTitle === link.title.toLowerCase();

    return (
      <StyledMenuLink isActive={isActive} key={link.title} to={link.to}>
        <Text
          fontSize="medium"
          tag="div"
          color="primaryText"
          textAlign="left"
          textTransform="uppercase"
        >
          {link.title}
        </Text>
      </StyledMenuLink>
    );
  });

  return (
    <>
      <MenuWrapper>{mappedLinks}</MenuWrapper>
    </>
  );
};

export default MenuLinks;
