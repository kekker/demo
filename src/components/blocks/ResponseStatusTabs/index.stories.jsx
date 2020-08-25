import React from 'react';
import { Story, StoryRow } from '../../storybook';

import ResponseStatusTabs from './ResponseStatusTabs';

export default {
  title: 'Response Status Tabs',
};

const exampleCode1 = `curl -X POST" 
    -H "Accept: application/json" 
    -H "Channel: {CHANNEL}" 
    -H "Content-Type: application/json" 
    -H "Authorization: {AUTHORIZATION}" 
    -d "{  
      "dealUid": "{UID}",  
      "statusCode": "Issued",  
      "remark": null,  
      "parameters": []
    }"
  `;

const exampleCode2 = `curl -X GET
  -H "Accept: application/json" 
  -H "Channel: {CHANNEL}" 
  -H "Authorization: {AUTHORIZATION}"
`;

const clientResponse = [
  {
    statusCode: 200,
    description: 'Returned if the request is successful.',
    headers: [
      {
        header: 'content-type',
        value: 'application/json; charset=utf-8'
      },
      {
        header: 'api-supported-versions',
        value: 'Supported versions. Example: 1.0, 2.0'
      }
    ],
    scheme: {
      contentType: 'application/json',
      value: 'ClusterInfo',
      ref: '#'
    },
    example: exampleCode1
  },
  {
    statusCode: 400,
    description: 'Returned in case of request validation error.',
    headers: [
      {
        header: 'content-type',
        value: 'application/json; charset=utf-8'
      },
      {
        header: 'api-supported-versions',
        value: 'Supported versions. Example: 1.0, 2.0'
      }
    ],
    scheme: {
      contentType: 'application/json',
      value: 'Error',
      ref: '#'
    },
    example: exampleCode2
  },
  {
    statusCode: 401,
    description: 'Returned if the authentication credentials are incorrect or missing.',
    scheme: {
      contentType: 'any',
      value: 'Depends on authentication proxy'
    }
  },
  {
    statusCode: 500,
    description: 'Returned in case of unpredictable error.',
    headers: [
      {
        header: 'content-type',
        value: 'application/json; charset=utf-8'
      },
      {
        header: 'api-supported-versions',
        value: 'Supported versions. Example: 1.0, 2.0'
      }
    ],
    scheme: {
      contentType: 'application/json',
      value: 'Error',
      ref: '#'
    },
    example: exampleCode2
  }
];

export const ResponseStatusTabsStory = () => (
  <Story>
    <StoryRow heading="ResponseStatusTabs">
      <ResponseStatusTabs responseStatusArray={clientResponse} />
    </StoryRow>
  </Story>
);
