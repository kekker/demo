export default {
  name: 'CreateDeal',
  children: ['Party', 'Parameter', 'Transition'],
  fields: [
    {
      name: 'appRef',
      type: 'nullable string, maxLength: 32',
      description: 'Referential information about app'
    },
    {
      name: 'kind',
      type: 'string',
      description: 'Deal kind (one of GET /api/deals/templates)'
    },
    {
      name: 'parent',
      type: 'nullable string',
      description: 'Parent deal identifier'
    },
    {
      name: 'parties',
      type: 'Array<Party>',
      description: 'List of the deals participants'
    },
    {
      name: 'parameters',
      type: 'Array<Parameter>',
      description: 'List of the deals parameters'
    },
    {
      name: 'transitions',
      type: 'Array<Transition>',
      description: 'Role-based state transitions map. (Empty if deal kind has predefined transitions map or deal has no state map restrictions)'
    }
  ],
  example: `{
  "kind": "LcDeal",
  "parent":null,
  "appRef": null,
  "parameters": [
    {
      "key": "DocNumber",
      "value": "123"
    },
    {
      "key": "Item",
      "value": "Pepper"
    },
    {
      "key": "DeliveryDate",
      "value": "2020-08-08"
    },
    {
      "key": "Quantity",
      "value": "10"
    }
  ],
  "parties": [
    {
      "key": "QRM1",
      "role": "Seller"
    },
    {
      "key": "QRM2",
      "role": "Buyer"
    },
    {
      "key": "QRM3",
      "role": "Bank"
    }
  ],   
  "transitions": [
    {
      "status": "CargoSent",
      "statusNext": "CargoGot",
      "roles": [
         "Buyer"
       ]
    },
    {
      "status": "LcOk",
      "statusNext": "CargoSent",
      "roles": [
         "Seller"
       ]
    }
  ]
}`
};
