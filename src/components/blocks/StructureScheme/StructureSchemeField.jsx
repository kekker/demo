import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../fragments/TextStyles/Text';
import Flex from '../../fragments/Flex';


const StyledFlex = styled(Flex)`
  border-bottom: 1px solid hsla(0,0%,0%,0.12);
  
  &:last-child {
    border: none;
  }
`;

const StructureSchemeField = ({ field }) => (
  <StyledFlex
    ml={2}
    mb={{ _: 3, md: 2 }}
    pt={1}
    pb={1}
    flexDirection={{ _: 'column', md: 'row' }}
  >
    <Text fontWeight={{ _: 800, md: 300 }} mr={2} tag="div" style={{ flexBasis: '20%' }}>
      {field.name}
    </Text>
    <Text mr={2} tag="div" style={{ flexBasis: '20%' }}>
      {field.type}
    </Text>
    <Text tag="div" style={{ flexBasis: '40%' }}>
      {field.description}
    </Text>
  </StyledFlex>
);

StructureSchemeField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string
  })
};

export default StructureSchemeField;
