export default {
  name: 'Error',
  fields: [
    {
      name: 'errorMessage',
      type: 'nullable string',
      description: 'Error description'
    }
  ],
  example: `{
  "errorMessage": "Cluster not found"
}`
};
