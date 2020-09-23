import React from 'react';

import { Story, StoryRow } from '../../storybook';
import SamplesButtons from './SamplesButtons';

export default {
  title: 'Samples Block',
};

export const SamplesButtonsStory = () => (
  <Story>
    <StoryRow heading="Samples Buttons">
      <SamplesButtons />
    </StoryRow>
  </Story>
);
