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

  @media screen and and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

const ContainerSection = ({
  children, height, mobileHeight, bgColor
}) => (
  <Section height={height} mobileHeight={mobileHeight} bgColor={bgColor}>
    {children}
  </Section>
);

ContainerSection.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  bgColor: PropTypes.string,
};

ContainerSection.defaultProps = {
  height: '100%',
  bgColor: 'transparent',
  mobileHeight: '100%',
};

export default ContainerSection;
