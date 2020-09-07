export default {
  name: 'PagedResponse<DealState>',
  children: ['DealState'],
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
      type: 'Array<DealState>',
      description: 'Items array'
    }
  ],
  example: `{
  "pageNumber": 1,
  "pageSize": 10,
  "totalRecords": 3,
  "data": [
    {
      "dealId": "ad04c39314184ac0847304fc22eaac75:fc5567d419c647e0b4f8806dc8d3a9ae",
      “localDealId”:3511,
      "kind": "FirstDeal",
      "version": 8,
      "status": "CargoGot"
    },
    {
      "dealId": null,
      “localDealId”:3510,
      "kind": "FirstDeal",
      "version": 0,
      "status": null
    },
    {
      "dealId": "ad04c39314184ac0847304fc22eaac75:57af8d5e2cde483b84f761038bd902ff",
      “localDealId”:3509,
      "kind": "FirstDeal",
      "version": 3,
      "status": "CONFIRMED"
    }
  ]
}`
};
