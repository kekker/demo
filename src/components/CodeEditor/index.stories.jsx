import React from 'react';
import { Story, StoryRow } from '../StorybookComponents';

import CodeEditor from './CodeEditor';

export default {
  title: 'Code Editor',
};

const exampleCode1 = `

    curl -X POST "http://democlient1.kekker.com/api/deals/setstatus" 
    -H "Accept: application/json" 
    -H "Channel: {CHANNEL}" 
    -H "Content-Type: application/json" 
    -H "Authorization: {AUTHORIZATION}" 
    -d "{  
      "dealUid": "{UID}",  
      "status": "Issued",  
      "remark": null,  
      "parameters": []
    }"
  `;

const exampleCode2 = `

  curl -X GET "http://democlient2.kekker.com/api/deals/{UID}" 
  -H "Accept: application/json" 
  -H "Channel: {CHANNEL}" 
  -H "Authorization: {AUTHORIZATION}"
`;

export const CodeEditorStory = () => (
  <Story>
    <StoryRow heading="CodeEditor">
      <CodeEditor code={exampleCode1} />
      <CodeEditor code={exampleCode2} />
    </StoryRow>
  </Story>
);
