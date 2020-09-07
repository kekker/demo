export default {
  name: 'PagedResponse<Client>',
  children: ['Client'],
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
      type: 'Array<Client>',
      description: 'Items array'
    }
  ],
  example: `{
  "pageNumber": 1,
  "pageSize": 10,
  "totalRecords": 3,
  "data": [
    {
      "clusterId": "abb755c40618426ead3384f81807586d",
      "key": "QRM1",
      "publicCertificates": [],
      "info": "QRM1 public data"
    },
    {
      "clusterId": "abb755c40618426ead3384f81807586d",
      "key": "QRM2",
      "publicCertificates": [],
      "info": "QRM2 public data"
    },
    {
      "clusterId": "abb755c40618426ead3384f81807586d",
      "key": "QRM3",
      "publicCertificates": [],
      "info": "QRM3 public data"
    }
  ]
}`
};
