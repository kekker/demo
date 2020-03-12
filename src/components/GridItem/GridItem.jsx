import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from "../TextStyles/Heading";
import Text from "../TextStyles/Text";
import Flex from "../Flex";

const StyledGridItem = styled.div.attrs( props => ({
  basis: `calc(100% / ${props.cols})`
}))`
  flex-basis: ${ props => props.basis};
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = ({ cols, header, content, link_to }) => {
  const ifLink = link_to ?
    <Link to={link_to} title={'read more'}><Text color={'inherit'} weight={800}>read more</Text></Link> : '';
  return (
    <Flex direction={'column'} grow={'0'} shrink={'1'} basis={`calc(100% / ${cols} - 30px*2/3)`}>
      <Heading align={'left'} level={2}>{header}</Heading>
      { content.map( item => (
        <Text tag={'div'}>
          {item}
        </Text>
      ))}
      {ifLink}
    </Flex>
  );
};

GridItem.propTypes = {
  cols: PropTypes.number,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link_to: PropTypes.string
};

GridItem.defaultTypes = {
  cols: 2,
};

export default GridItem;
