import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../TextStyles/Text';

const Button = styled.button`

  color: ${props => props.theme.colors.primaryText};

   ${({ isPrimary, theme: { colors } }) => (isPrimary ?
    (` border: 2px solid ${colors.primaryBrand};
       background: ${colors.primaryBrand};
       padding: 0.1em 0.7em;`) : 
    (` border: 2px solid ${colors.primaryLight};
       background: ${colors.primaryLight};
       padding: 0.4em 0.8em;`))};
          
  font-size: ${props => props.theme.fontSizes[props.size]};
  border-radius: 2em;

`;

const ButtonLink = ({
  title, isPrimary, to
}) => (
  <Link to={to}>
    <Button isPrimary={isPrimary} type="button">
      <Text
        fontSize={'medium'}
        fontWeight="800"
        isHeadingFont
        textTransform="uppercase"
      >
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
  isPrimary: false,
  size: 'small',
};

export default ButtonLink;
