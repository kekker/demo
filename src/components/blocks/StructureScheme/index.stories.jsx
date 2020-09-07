import React from 'react';
import { Story, StoryRow } from '../../storybook';

import StructureScheme from './StructureScheme';
import SchemeNavigator from './SchemeNavigator';
import SchemeModal from './SchemeModal';

export default {
  title: 'StructureScheme',
};

export const StructureSchemeStory = () => (
  <Story>
    <StoryRow heading="Simple Scheme">
      <div style={{ width: '600px' }}>
        <SchemeNavigator elementName="Client" />
      </div>
    </StoryRow>

    <StoryRow heading="Complex Scheme">
      <div style={{ width: '600px' }}>
        <SchemeNavigator elementName="PagedResponseClient" />
      </div>
    </StoryRow>

    <StoryRow heading="Complex Scheme">
      <div style={{ width: '600px' }}>
        <SchemeNavigator elementName="Deal" />
      </div>
    </StoryRow>

  </Story>
);

export const ModalStructureSchemeStory = () => (
  <Story>
    <StoryRow heading="Modal Scheme">
      <SchemeModal elementName="Deal" />
    </StoryRow>
  </Story>
);
