import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Heading from '../TextStyles/Heading';
import Text from '../TextStyles/Text';
import Flex from '../Flex';
import styled from "styled-components";

const StyledGrid = styled(Flex)`
  &:last-child {
    padding-right: 0;
  }
`;

const GridItem = ({
  cols, linkTo, children, ...props
}) => {
  const ifLink = linkTo ? (
    <Link to={linkTo} title="read more">
      <Text fontSize={'medium'} color="inherit" fontWeight={500}>
        read more
      </Text>
    </Link>
  ) : (
    ''
  );
  const multiply = `${cols-1}/${cols}`;

  return (
    <StyledGrid
      flexDirection="column"
      flexGrow="0"
      flexShrink="1"
      flexBasis={`calc(100% / ${cols} - 2em*${multiply})`}
      flexWrap="wrap"
      {...props}
    >
      {children}
      {ifLink}
    </StyledGrid>
  );
};

GridItem.propTypes = {
  cols: PropTypes.number,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
};

GridItem.defaultTypes = {
  cols: 2,
};

export default GridItem;
