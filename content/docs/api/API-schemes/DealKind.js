export default {
  name: 'DealKind',
  children: ['Transition'],
  fields: [
    {
      name: 'kind',
      type: 'string',
      description: 'Unique deal kind name'
    },
    {
      name: 'description',
      type: 'nullable string',
      description: 'Business description'
    },
    {
      name: 'transitions',
      type: 'Array<Transition>',
      description: 'Role-based state transitions map. (Empty array indicates that template has no state map restrictions)'
    }
  ],
  example: `{
  "key": "QRM1",
  "role": "Sender"
}`
};