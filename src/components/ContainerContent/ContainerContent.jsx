import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  padding-top: ${({ ptop }) => ptop};
  padding-bottom: ${({ pbottom }) => pbottom};
  padding-left: ${({ pleft }) => pleft};
  padding-right: ${({ pright }) => pright};

  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-width: 1200px;
`;

const ContainerContent = ({
  children,
  height,
  width,
  ptop,
  pbottom,
  pleft,
  pright,
}) => (
  <Content
    height={height}
    width={width}
    ptop={ptop}
    pbottom={pbottom}
    pleft={pleft}
    pright={pright}
  >
    {children}
  </Content>
);

ContainerContent.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  ptop: PropTypes.string,
  pbottom: PropTypes.string,
  pleft: PropTypes.string,
  pright: PropTypes.string,
  width: PropTypes.string,
};

ContainerContent.defaultProps = {
  height: '100%',
  width: '100%',
  ptop: '2em',
  pbottom: '2em',
  pleft: '4em',
  pright: '4em',
};

export default ContainerContent;
