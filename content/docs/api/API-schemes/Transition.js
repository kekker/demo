export default {
  name: 'Transition',
  fields: [
    {
      name: 'status',
      type: 'string, maxLength: 30',
      description: 'Source state'
    },
    {
      name: 'statusNext',
      type: 'string, maxLength: 30',
      description: 'Goal state'
    },
    {
      name: 'roles',
      type: 'Array<string maxLength: 30>',
      description: 'Roles of applying transitions participants'
    }
  ],
  example: `{
  "status": "CargoSent",
  "statusNext": "CargoGot",
  "roles": [
     "Buyer"
   ]
}`
};
