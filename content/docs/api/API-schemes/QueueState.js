export default [
  {
    name: 'QueueState',
    fields: [
      {
        name: 'QueueId',
        type: 'long',
        description: 'An operation identifier in the queue'
      },
      {
        name: 'Status',
        type: 'string, Available values: InQueue, InProgress',
        description: 'An operation status'
      }
    ],
    example: `{
  "queueId": 893,
  "status": "InQueue"
}`
  },
  {
    name: 'QueueState(Success)',
    fields: [
      {
        name: 'QueueId',
        type: 'long',
        description: 'An operation identifier in the queue'
      },
      {
        name: 'Status',
        type: '"Success"',
        description: 'An operation status'
      },
      {
        name: 'DealId',
        type: 'string',
        description: 'A unique platform Deal identifier'
      },
      {
        name: 'LocalDealId',
        type: 'long',
        description: 'A local Deal identifier'
      }
    ],
    example: `{
  "dealId": "abb755c40618426ead3384f81807586d:72538934179c4ad293adf4795ae6a0ef",
  "localDealId": 146,
  "queueId": 894,
  "status": "Success"
}`
  },
  {
    name: 'QueueState(Error)',
    fields: [
      {
        name: 'QueueId',
        type: 'long',
        description: 'An operation identifier in the queue'
      },
      {
        name: 'Status',
        type: '"Success"',
        description: 'An operation status'
      },
      {
        name: 'Error',
        type: 'string',
        description: 'Error description'
      }
    ],
    example: `{
  "error": "Values check failed",
  "queueId": 892,
  "status": "Error"
}`
  }
];
