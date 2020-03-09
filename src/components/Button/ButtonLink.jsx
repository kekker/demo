import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.theme.colors.primaryText};
  border: 2px solid
    ${({ isPrimary, theme: { colors } }) => (isPrimary ? colors.primaryBrand : colors.primaryLight)};
  background: ${({ isPrimary, theme: { colors } }) => (isPrimary ? colors.primaryBrand : colors.primaryLight)};

  margin: 1em;
  padding: 0.8em 1.2em;
  border-radius: 2em;
`;

const Header = styled.h4`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`;

const ButtonLink = ({ title, isPrimary, to }) => (
  <Link to={to}>
    <Button isPrimary={isPrimary} type="button">
      <Header>{title}</Header>
    </Button>
  </Link>
);

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  isPrimary: true,
};

export default ButtonLink;
