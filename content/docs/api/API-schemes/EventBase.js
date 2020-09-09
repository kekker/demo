export default [
  {
    name: 'SystemEvent',
    fields: [
      {
        name: 'eventUid',
        type: 'string($uuid)',
        description: 'Unique identifier for the event'
      },
      {
        name: 'Category',
        type: '"System"',
        description: 'Event category'
      },
      {
        name: 'Event',
        type: '"SystemConfigurationUpdated"',
        description: 'Event type'
      },
      {
        name: 'timestamp',
        type: 'string("yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss\'.\'fffffffzzz")',
        description: 'UTC event time'
      }
    ],
    example: ''
  },
  {
    name: 'ClientsEvent',
    fields: [
      {
        name: 'eventUid',
        type: 'string($uuid)',
        description: 'Unique identifier for the event'
      },
      {
        name: 'Category',
        type: '"Clients"',
        description: 'Event category'
      },
      {
        name: 'Event',
        type: '"ClientsListUpdated"',
        description: 'Event type'
      },
      {
        name: 'timestamp',
        type: 'string("yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss\'.\'fffffffzzz")',
        description: 'UTC event time'
      },
      {
        name: 'Source',
        type: 'string',
        description: 'Event source/Possible values: THIS, EXTERNAL'
      },
      {
        name: 'ObjectId',
        type: 'string',
        description: 'Identifier of the cluster'
      }
    ],
    example: ''
  },
  {
    name: 'DealEvent',
    fields: [
      {
        name: 'eventUid',
        type: 'string($uuid)',
        description: 'Unique identifier for the event'
      },
      {
        name: 'Category',
        type: '"Deals"',
        description: 'Event category'
      },
      {
        name: 'Event',
        type: 'string',
        description: 'Possible values: DealCreated, DealUpdated'
      },
      {
        name: 'timestamp',
        type: 'string("yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss\'.\'fffffffzzz")',
        description: 'UTC event time'
      },
      {
        name: 'ObjectId',
        type: 'string',
        description: 'Global identifier of the deal'
      },
      {
        name: 'LocalObjectId',
        type: 'long',
        description: 'Local identifier of the deal'
      }
    ],
    example: `{
  "objectId": "ad04c39314184ac0847304fc22eaac75:57af8d5e2cde483b84f761038bd902ff",
  "localObjectId":3487,
  "eventUid": "d4eb2098-3890-49c8-8029-729752c57e65",
  "event": "DealUpdated",
  "category": "Deals",
  "timestamp": "2020-08-04T21:41:05.183"
}`
  },
  {
    name: 'SuccessQueueEvent',
    fields: [
      {
        name: 'eventUid',
        type: 'string($uuid)',
        description: 'Unique identifier for the event'
      },
      {
        name: 'Category',
        type: '"Queue"',
        description: 'Event category'
      },
      {
        name: 'Event',
        type: '"SuccessQueueEvent"',
        description: 'Event type'
      },
      {
        name: 'timestamp',
        type: 'string("yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss\'.\'fffffffzzz")',
        description: 'UTC event time'
      },
      {
        name: 'ObjectId',
        type: 'string',
        description: 'Unique identifier of the deals queue action'
      },
      {
        name: 'DealId',
        type: 'string',
        description: 'Unique global identifier of the deals'
      }
    ],
    example: `{
  "objectId": 10023,
  "dealId": "ad04c39314184ac0847304fc22eaac75:57af8d5e2cde483b84f761038bd902ff",
  "eventUid": "1fdb07d4-e260-4e7e-aca9-69db3f0c2658",
  "event": "SuccessQueueEvent",
  "category": "Queue",
  "timestamp": "2020-08-04T21:41:05.183"
}`
  },
  {
    name: 'ErrorQueueEvent',
    fields: [
      {
        name: 'eventUid',
        type: 'string($uuid)',
        description: 'Unique identifier for the event'
      },
      {
        name: 'Category',
        type: '"Queue"',
        description: 'Event category'
      },
      {
        name: 'Event',
        type: '"ErrorQueueEvent"',
        description: 'Event type'
      },
      {
        name: 'timestamp',
        type: 'string("yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss\'.\'fffffffzzz")',
        description: 'UTC event time'
      },
      {
        name: 'ObjectId',
        type: 'string',
        description: 'Unique identifier of the deals queue action'
      },
      {
        name: 'Error',
        type: 'string',
        description: 'Action error description'
      }
    ],
    example: ''
  }
];
