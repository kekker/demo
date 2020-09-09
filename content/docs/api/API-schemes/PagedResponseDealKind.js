export default {
  name: 'PagedResponse<DealKind>',
  children: ['DealKind'],
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
      type: 'Array<DealKind>',
      description: 'Items array'
    }
  ],
  example: `{
  "pageNumber": 1,
  "pageSize": 10,
  "totalRecords": 2,
  "data": [
    {
    "dealKind": "ExampleDeal",
    "description": "Example deal",
    "transitions": [
      {
        "status": "NEW",
        "statusNext": "Created",
        "roles":[ "Sender"]
      },
      {
        "status": "Created",
        "statusNext": "Sent",
        "roles": ["Sender"]
      },
      {
        "status": "Sent",
        "statusNext": "Received",
        "roles": ["Receiver"]
      },
      {
        "status": "Received",
        "statusNext": "Approved",
        "roles": ["Receiver"]
      },
      {
        "status": "Received",
        "statusNext": "Refused",
        "roles": ["Receiver"]
      }
    ]
   },
   {
   "name": "FreeDeal",
   "description": "Free deal template",
   "transitions": []
   }
  ]
}`
};
