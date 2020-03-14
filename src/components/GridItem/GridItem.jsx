import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Heading from '../TextStyles/Heading';
import Text from '../TextStyles/Text';
import Flex from '../Flex';

const GridItem = ({
  cols, header, content, linkTo, ...props
}) => {
  const ifLink = linkTo ? (
    <Link to={linkTo} title="read more">
      <Text color="inherit" fontWeight={800}>
        read more
      </Text>
    </Link>
  ) : (
    ''
  );

  return (
    <Flex
      flexDirection="column"
      flexGrow="0"
      flexShrink="1"
      flexBasis={`calc(100% / ${cols} - 30px*2/3)`}
      flexWrap="wrap"
      {...props}
    >
      <Heading align="left" level={2}>
        {header}
      </Heading>
      {content.map(item => (
        <Text tag="div">{item}</Text>
      ))}
      {ifLink}
    </Flex>
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
