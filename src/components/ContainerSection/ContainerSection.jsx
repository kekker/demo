import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  padding-left: 20;
  padding-right: 20;
  margin-left: auto;
  margin-right: auto;

  height: ${({ height }) => height};
`;

const ContainerSection = ({ children, height }) => (
  <Section height={height}>{children}</Section>
);

ContainerSection.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string
};

ContainerSection.defaultProps = {
  height: '100%',
};

export default ContainerSection;
