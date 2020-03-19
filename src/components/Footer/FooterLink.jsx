import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../TextStyles/Text';
import footerNav from "../../../content/footerNav.yml";
import GridItem from "../GridItem";
import Heading from "../TextStyles/Heading";

const StyledFooterLink = styled(Link)`
  color: ${props => props.theme.colors.invertedText};
  display: block;
  transition: 'color 0.2s ease-out';

  text-decoration: none;
  line-height: 1.3em;

  &:focus {
    outline: 0;
    color: ${props => props.theme.colors.primaryBrand};
  }

  &:hover {
    color: ${props => props.theme.colors.primaryBrand};
  }
`;

// const FooterLink = ({ title, to }) => (
//   <div>
//     <StyledFooterLink title={title} to={to}>
//       <Text isHeadingFont fontWeight={400} color="inherit" fontSize="small">
//         {title}
//       </Text>
//     </StyledFooterLink>
//   </div>
// );

const FooterLink = ({ footerColumn, count, fontSize }) => (
    <GridItem
        cols={count}
        header={footerColumn.header}
    >
        <Heading
            level={4}
            color={'invertedText'}
            letterSpacing={0}
        >
            {footerColumn.header}
        </Heading>
        {footerColumn.items.map(item => (
            <StyledFooterLink
                to={item.to}
                title={item.title}
            >
                <Text
                    fontWeight={300}
                    color="inherit"
                    fontSize={fontSize}>
                    {item.title}
                </Text>
            </StyledFooterLink>
        ))}
    </GridItem>
);



FooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default FooterLink;
