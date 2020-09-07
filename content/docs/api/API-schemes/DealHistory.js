export default {
  name: 'DealHistory',
  fields: [
    {
      name: 'status',
      type: 'string',
      description: 'Actual deal state'
    },
    {
      name: 'version',
      type: 'integer',
      description: 'Actual deal version'
    },
    {
      name: 'Remark',
      type: 'string',
      description: 'Actual remark'
    },
    {
      name: 'Executor',
      type: 'string(32)',
      description: 'Unique global identifier of the applying participant'
    }
  ],
  example: `{
  "status": "SENT",
  "version": 2,
  "remark": "REMARK",
  "executor": "CLIENT1"
}`
};
