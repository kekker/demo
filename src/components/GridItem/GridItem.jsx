import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Heading from '../TextStyles/Heading';
import Text from '../TextStyles/Text';
import Flex from '../Flex';

const GridItem = ({
  cols, header, content, linkTo
}) => {
  const ifLink = linkTo ? (
    <Link to={linkTo} title="read more">
      <Text color="inherit" weight={800}>
        read more
      </Text>
    </Link>
  ) : (
    ''
  );

  return (
    <Flex
      direction="column"
      grow="0"
      shrink="1"
      basis={`calc(100% / ${cols} - 30px*2/3)`}
      wrap="wrap"
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
