import React from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

const StyledContainerContent = styled.div.attrs(props => ({
  pb: props.pb && props.pb === 'normal'
    ? { _: 4, sm: 6 }
    : props.pb
}))`
  display: block;

  ${space};
  ${layout};

  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => props.theme.layout.containerMaxWidth};
`;

const ContainerContent = ({ children, ...props }) => (
  <StyledContainerContent {...props}>
    {children}
  </StyledContainerContent>
);


ContainerContent.defaultProps = {
  height: '100%',
  width: '100%',
  pt: { _: 3, sm: 6 },
  pb: 0,
  pl: { _: 3, sm: 6, md: 7 },
  pr: { _: 3, sm: 6, md: 7 },
};

export default ContainerContent;
