export default {
  name: 'ClusterInfo',
  fields: [
    {
      name: 'clusterId',
      type: 'string',
      description: 'Unique identifier for the cluster'
    },
    {
      name: 'description',
      type: 'string',
      description: 'Description'
    },
    {
      name: 'techInfo',
      type: 'string',
      description: 'Technical characteristics'
    },
    {
      name: 'applications',
      type: 'Array<string>',
      description: 'Items array'
    },
    {
      name: 'OperatorInfo',
      type: 'string',
      description: 'Contacts of an operator'
    },
    {
      name: 'ClientsCount',
      type: 'integer',
      description: 'A number of cluster members'
    }
  ],
  example: `{
  "clusterId": "QRM",
  "description": "Kekker Sandbox",
  "techInfo": "Quorum private cluster",
  "applications": [],
  "operatorInfo": "Kekker",
  "clientsCount": 3
}`
};
