export default {
  name: 'Party',
  fields: [
    {
      name: 'key',
      type: 'string, maxLength: 32',
      description: 'Unique global identifier of the participant'
    },
    {
      name: 'role',
      type: 'string, maxLength: 32',
      description: 'Role of the participant for the current deal'
    }
  ],
  example: `{
  "key": "QRM1",
  "role": "Sender"
}`
};
