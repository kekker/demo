import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 2em 2em 1em 2em;

  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const ContainerContent = ({ children, height, width }) => (
  <Content height={height} width={width}>
    {children}
  </Content>
);

ContainerContent.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
};

ContainerContent.defaultProps = {
  height: '100%',
  width: '100%',
};

export default ContainerContent;
