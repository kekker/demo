import React from 'react';
import styled, { withTheme } from 'styled-components';
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
  pt: { _: 4, sm: 6},
  pb: { _: 4, sm: 6},
  pl: { _: 4, sm: 6, md: 7},
  pr: { _: 4, sm: 6, md: 7},
};

export default withTheme(ContainerContent);
