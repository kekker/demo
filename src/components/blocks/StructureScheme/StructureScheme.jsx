import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TabPanels } from '@reach/tabs';

import Heading from '../../fragments/TextStyles/Heading';
import StructureSchemeField from './StructureSchemeField';
import CodeBlock from '../CodeEditor/CodeBlock';
import {
  StyledTab, StyledTabList, StyledTabPanel, StyledTabs
} from '../../fragments/StyledTabs';

import schemes from '../../../../content/docs/api/API-schemes';
import Text from '../../fragments/TextStyles/Text';
import Flex from '../../fragments/Flex';


const StyledFlex = styled(Flex)`
  border-bottom: 1px solid hsla(0,0%,0%,0.12);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
  }
`;

const StructureScheme = ({ scheme }) => {
  if (typeof scheme === 'string') {
    scheme = schemes[scheme];
  }

  return (
    <div>
      <Heading level={1}>{scheme.name}</Heading>

      <StyledTabs>
        <StyledTabList>
          <StyledTab index={0}>
            Scheme
          </StyledTab>
          <StyledTab index={1}>
            Example
          </StyledTab>

        </StyledTabList>
        <TabPanels>
          <StyledTabPanel>

            <StyledFlex pt={1} pb={1} m={2} flexDirection="row">
              <Text fontWeight={800} tag="div" mr={2} style={{ flexBasis: '20%' }}>
                Field
              </Text>
              <Text fontWeight={800} tag="div" mr={2} style={{ flexBasis: '20%' }}>
                Type
              </Text>
              <Text fontWeight={800} tag="div" style={{ flexBasis: '40%' }}>
                Description
              </Text>
            </StyledFlex>

            {scheme.fields.map(field => (
              <StructureSchemeField key={`${scheme.name}_Field${field.name}`} field={field} />
            ))}

          </StyledTabPanel>
          <StyledTabPanel>
            <CodeBlock code={scheme.example} />
          </StyledTabPanel>
        </TabPanels>
      </StyledTabs>

    </div>
  );
};

StructureScheme.propTypes = {
  scheme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      example: PropTypes.string,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          type: PropTypes.string,
          description: PropTypes.string
        })
      )
    })
  ])
};

export default StructureScheme;
