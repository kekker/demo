import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../TextStyles/Text';
import GridItem from '../GridItem';
import Heading from '../TextStyles/Heading';

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

const FooterLink = ({ footerColumn, count, fontSize }) => (
  <GridItem cols={count} header={footerColumn.header}>
    <Heading mb={2} level={4} color="invertedText" letterSpacing={0}>
      {footerColumn.header}
    </Heading>
    {footerColumn.items.map(item => (
      <StyledFooterLink
        to={item.to}
        title={item.title}
        key={`footer${item.title}`}
      >
        <Text fontWeight={300} color="inherit" fontSize={fontSize}>
          {item.title}
        </Text>
      </StyledFooterLink>
    ))}
  </GridItem>
);

FooterLink.propTypes = {
  footerColumn: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  fontSize: PropTypes.string,
};

export default FooterLink;
