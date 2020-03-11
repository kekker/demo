import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  padding-left: 20;
  padding-right: 20;
  margin-left: auto;
  margin-right: auto;

  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
`;

const ContainerSection = ({ children, height, bgColor }) => (
  <Section height={height} bgColor={bgColor}>
    {children}
  </Section>
);

ContainerSection.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  bgColor: PropTypes.string,
};

ContainerSection.defaultProps = {
  height: '100%',
  bgColor: 'transparent',
};

export default ContainerSection;
