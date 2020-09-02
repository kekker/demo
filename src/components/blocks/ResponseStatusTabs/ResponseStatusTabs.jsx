import React from 'react';
import PropTypes from 'prop-types';

import {
  TabList, TabPanel, TabPanels
} from '@reach/tabs';

import { AnimatedTab, AnimatedTabs } from '../../fragments/AnimatedTabs';
import ResponsePanel from './ResponsePanel';
import ColorfulStatusSpan from './ColorfulStatusSpan';


const ResponseStatusTabs = ({ responseStatusArray }) => (
  <div style={{ maxWidth: '800px' }}>

    <AnimatedTabs>
      <TabList style={{ justifyContent: 'space-around' }}>
        {responseStatusArray.map((response, index) => (
          <AnimatedTab index={index}>
            <ColorfulStatusSpan
              index={index}
              statusCode={response.statusCode}
            />
          </AnimatedTab>
        ))}
      </TabList>

      <TabPanels>
        {responseStatusArray.map((response) => (
          <TabPanel>
            <ResponsePanel responseStatus={response} />
          </TabPanel>
        ))}
      </TabPanels>
    </AnimatedTabs>

  </div>
);

ResponseStatusTabs.propTypes = {
  responseStatusArray: PropTypes.arrayOf(
    PropTypes.shape({
      statusCode: PropTypes.number.isRequired,
      description: PropTypes.string,
      headers: PropTypes.arrayOf(
        PropTypes.shape({
          header: PropTypes.string,
          value: PropTypes.string
        })
      ),
      scheme: PropTypes.shape({
        contentType: PropTypes.string,
        value: PropTypes.string,
        ref: PropTypes.string
      }),
      example: PropTypes.string
    })
  ).isRequired,
};

export default ResponseStatusTabs;
