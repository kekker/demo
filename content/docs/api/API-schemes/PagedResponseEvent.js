export default {
  name: 'PagedResponse<Event>',
  children: ['EventBase'],
  fields: [
    {
      name: 'pageNumber',
      type: 'integer',
      description: 'Paging: position'
    },
    {
      name: 'pageSize',
      type: 'integer',
      description: 'Paging: returned items count'
    },
    {
      name: 'totalRecords',
      type: 'integer',
      description: 'Total items count'
    },
    {
      name: 'data',
      type: 'Array<EventBase>',
      description: 'Items array'
    }
  ],
  example: `{
  "pageNumber": 1,
  "pageSize": 10,
  "totalRecords": 5,
  "data": [
    {
      "objectId": "ad04c39314184ac0847304fc22eaac75:57af8d5e2cde483b84f761038bd902ff",
      “localObjectId”:3487,
      "eventUid": "d4eb2098-3890-49c8-8029-729752c57e65",
      "event": "DealUpdated",
      "category": "Deals",
      "timestamp": "2020-08-04T21:41:05.183"
    },
    {
      "queueId": 10022,
      "dealId": "ad04c39314184ac0847304fc22eaac75:57af8d5e2cde483b84f761038bd902ff",
      "eventUid": "d256d4ce-b253-490f-83a9-68195c0f2bbe",
      "event": "Success",
      "category": "Queue",
      "timestamp": "2020-08-04T21:23:14.813"
    },
    {
      "objectId": "ad04c39314184ac0847304fc22eaac75:57af8d5e2cde483b84f761038bd902ff",
      “localObjectId”:3487,
      "eventUid": "9a51267f-ce6b-4347-90cd-52d72a12c969",
      "event": "DealUpdated",
      "category": "Deals",
      "timestamp": "2020-08-04T21:23:14.813"
    }
  ]
}`
};
