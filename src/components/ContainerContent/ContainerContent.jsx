import React from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

const StyledContainerContent = styled.div`
  display: block;

  ${space};
  ${layout};

  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

const ContainerContent = ({children, ...props}) => {
  if (props.pb && props.pb === 'normal') {
    props.pb = {_: 4, sm: 6};
  }

  return (
      <StyledContainerContent {...props}>
        {children}
      </StyledContainerContent>
  )
};


ContainerContent.defaultProps = {
  height: '100%',
  width: '100%',
  pt: { _: 4, sm: 6 },
  pb: 0,
  pl: { _: 4, sm: 6, md: 7 },
  pr: { _: 4, sm: 6, md: 7 },
};

export default ContainerContent;
