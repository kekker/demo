import React, { useState } from 'react';
import styled from 'styled-components';
import { Story, StoryRow } from '../../storybook';

import AnimatedDialog from './index';

export default {
  title: 'Animated Dialog',
};

const DialogWrapper = styled.div`
  display: flex;
  padding: 2rem;
`;

export const AnimatedDialogStory = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <Story>
      <StoryRow heading="AnimatedDialog">
        <button type="button" onClick={open}>Open Dialog</button>
        <AnimatedDialog isOpen={showDialog} onDismiss={close}>
          <DialogWrapper>
            Modal Window
          </DialogWrapper>
        </AnimatedDialog>
      </StoryRow>
    </Story>
  );
};
