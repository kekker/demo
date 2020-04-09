import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Text from '../TextStyles/Text';
import getPageTitleFromPathname from "../../utils/getPageTitleFromPathname";

// const LinkSwitcher = (link, location) => {
//     if (!link) return;
//     const shortLink = link.slice(1);
//     const arr = shortLink.split('/');
//     const pagePrefix = location.pathname;
//     const arrLocation = pagePrefix.slice(1).split('/');
//     console.log(arrLocation[0]);
//     console.log(arr[0]);
//     switch(arr.length) {
//         case 3:
//             return (
//                 arrLocation[0] === arr[0] ?
//                     <SectionLink to={link}>
//                         {arr[1]}
//                     </SectionLink>
//                  : ''
//             );
//         case 2: return (
//             <Link to={arr[arr.length-1]}>
//                 {arr[arr.length-1]}
//             </Link>
//         );
//         default:
//             return ''
//     }
// };

const MenuWrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledMenuLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MenuLinks = ({ links, location }) => {
  const mappedLinks = links.map(link => {

      const currentPageLinkTitle = getPageTitleFromPathname(location);

      const isActive = currentPageLinkTitle === link.title.toLowerCase();

      return (
          <StyledMenuLink key={link.title} to={link.to}>
              <Text
                  textDecoration={ isActive ? "underline" : "none"}
                  fontSize="medium"
                  fontWeight="500"
                  tag="div"
                  color="primaryText"
                  textAlign="left"
                  textTransform="uppercase"
              >
                  {link.title}
              </Text>
          </StyledMenuLink>
      )
  });

  return (
    <>
      <MenuWrapper>{mappedLinks}</MenuWrapper>
    </>
  );
};

export default MenuLinks;
