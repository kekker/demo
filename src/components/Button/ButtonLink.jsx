import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';

const Button = styled.button`
  color: ${props => props.theme.colors.primaryText};
  border: 2px solid
    ${({ isPrimary, theme: { colors } }) => (isPrimary ? colors.primaryBrand : colors.primaryLight)};
  background: ${({ isPrimary, theme: { colors } }) => (isPrimary ? colors.primaryBrand : colors.primaryLight)};

  margin: 1em;
  font-size: ${props => props.theme.fontSizes[props.size]};
  padding: 0.1em 0.5em;
  border-radius: 2em;
`;

const ButtonLink = ({
  title, isPrimary, to, size
}) => (
  <Link to={to}>
    <Button isPrimary={isPrimary} type="button">
      <Text weight="800" isHeadingFont transform="uppercase" size={size}>
        {title}
      </Text>
    </Button>
  </Link>
);

ButtonLink.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  isPrimary: true,
  size: 'small',
};

export default ButtonLink;
