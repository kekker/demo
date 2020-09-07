import React from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { TabList, TabPanels, TabPanel } from '@reach/tabs';

import { AnimatedTab, AnimatedTabs } from '../../fragments/AnimatedTabs';
import StructureScheme from './StructureScheme';

import schemes from '../../../../content/docs/api/API-schemes';


const SchemeNavigator = ({ elementName }) => {
  const element = schemes[elementName];

  if (element.children instanceof Array) {
    return (
      <AnimatedTabs>
        <TabList>
          <AnimatedTab index={0}>
            {elementName}
          </AnimatedTab>
          {element.children.map((childName, index) => (
            <AnimatedTab key={`TabPanel${childName}`} index={index + 1}>
              {childName}
            </AnimatedTab>
          ))}
        </TabList>

        <TabPanels style={{ paddingTop: 20 }}>
          <TabPanel>
            <StructureScheme scheme={element} />
          </TabPanel>
          {element.children.map(childName => (
            <TabPanel key={`TabPanel${childName}`}>
              <StructureScheme scheme={childName} />
            </TabPanel>
          ))}
        </TabPanels>
      </AnimatedTabs>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <StructureScheme scheme={element} />
    </div>
  );
};

SchemeNavigator.propTypes = {
  elementName: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string
  ])
};

export default SchemeNavigator;
