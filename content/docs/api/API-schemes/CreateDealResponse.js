export default {
  name: 'CreateDealResponse',
  fields: [
    {
      name: 'queueId',
      type: 'long',
      description: 'Identifier for the queue action'
    },
    {
      name: 'localDealId',
      type: 'long',
      description: 'Local identifier for the deal'
    }
  ],
  example: `{
  "queueId": 15897,
  "localDealId": 3456
}`
};
