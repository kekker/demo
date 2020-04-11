import React from 'react';
import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

const ContainerSection = styled.section`
  ${space};
  ${layout};
  ${color};

  margin-left: auto;
  margin-right: auto;
`;

ContainerSection.defaultProps = {
  height: '100%',
  bg: 'transparent',
  mobileHeight: '100%',
};

export default ContainerSection;
