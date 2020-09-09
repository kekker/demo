import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Text from '../TextStyles/Text';
import Flex from '../Flex';

const StyledGrid = styled(Flex)`
  &:last-child {
    padding-right: 0;
  }
`;

const GridItem = ({
  cols, linkTo, hasOffsets, children, ...props
}) => {
  const ifLink = linkTo ? (
    <Link to={linkTo} title="read more">
      <Text fontSize="medium" color="inherit" fontWeight={500}>
        read more
      </Text>
    </Link>
  ) : (
    ''
  );
  const multiply = `${cols - 1}/${cols}`;

  const flexBasis = hasOffsets
    ? `calc(100% / ${cols} - 2em*${multiply})`
    : `calc(100% / ${cols})`;

  return (
    <StyledGrid
      flexDirection="column"
      flexGrow="0"
      flexShrink="1"
      flexBasis={flexBasis}
      flexWrap="wrap"
      {...props}
    >
      {children}
      {ifLink}
    </StyledGrid>
  );
};

GridItem.propTypes = {
  cols: PropTypes.number.isRequired,
  linkTo: PropTypes.string,
  hasOffsets: PropTypes.bool,
  children: PropTypes.node,
};

GridItem.defaultProps = {
  hasOffsets: true
};

export default GridItem;
