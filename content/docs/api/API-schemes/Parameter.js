export default {
  name: 'Parameter',
  fields: [
    {
      name: 'key',
      type: 'string, maxLength: 32',
      description: 'Parameter name'
    },
    {
      name: 'value',
      type: 'string, maxLength: 32',
      description: 'Parameter value'
    }
  ],
  example: `{
  "key": "DocNumber",
  "value": "123"
}`
};
