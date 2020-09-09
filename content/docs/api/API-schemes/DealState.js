export default {
  name: 'DealState',
  fields: [
    {
      name: 'dealId',
      type: 'string',
      description: 'Global identifier for the deal'
    },
    {
      name: 'localDealId',
      type: 'long',
      description: 'Local identifier for the deal'
    },
    {
      name: 'kind',
      type: 'string',
      description: 'Deal kind'
    },
    {
      name: 'status',
      type: 'string',
      description: 'Actual deal state'
    },
    {
      name: 'version',
      type: 'integer',
      description: 'Actual deal version'
    }
  ],
  example: `{
  "dealId": "ad04c39314184ac0847304fc22eaac75:fc5567d419c647e0b4f8806dc8d3a9ae",
  "localDealId":3511,
  "kind": "FirstDeal",
  "version": 8,
  "status": "CargoGot"
}`
};
