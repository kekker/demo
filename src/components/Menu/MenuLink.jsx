import Heading from "../TextStyles/Heading";
import Text from "../TextStyles/Text";
import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";

const SectionLink = styled(Link)`
    color: red;
`;

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
    margin-left: 20px;
    margin-bottom: 30px;
`;

const MenuLink = ({ links }) => {
    const mappedLinks = links.map(link => (
        <Link to={link.to}>
            <Text
                fontSize={'small'}
                tag={'div'}
                color="primaryText"
                textAlign={'left'}
            >
                {link.title}
            </Text>
        </Link> ));

    return (
        <>
            <MenuWrapper>
                {mappedLinks}
            </MenuWrapper>
        </>
    );
};

export default MenuLink;
