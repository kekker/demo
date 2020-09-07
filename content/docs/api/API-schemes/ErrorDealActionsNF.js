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
  "errorMessage": "Deals action not found"
}`
};
