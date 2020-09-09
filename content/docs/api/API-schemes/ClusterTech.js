export default {
  name: 'ClusterTech',
  fields: [
    {
      name: 'clusterId',
      type: 'string',
      description: 'Unique identifier for the cluster'
    },
    {
      name: 'VersionInfo',
      type: 'string',
      description: 'An identifier of cluster description version'
    },
    {
      name: 'ClientsCount',
      type: 'integer',
      description: 'A number of cluster members'
    }
  ],
  example: `{
  "clusterId": "QRM",
  "versionInfo": "1.0",
  "clientsCount": 3
}`
};
