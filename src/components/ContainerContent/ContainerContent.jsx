import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { space, layout } from 'styled-system';

const ContainerContent = styled.div`
  display: block;

  ${space};
  ${layout};

  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

ContainerContent.defaultProps = {
  height: '100%',
  width: '100%',
  pt: 4,
  pb: 4,
  pl: 4,
  pr: 4,
};

export default withTheme(ContainerContent);
