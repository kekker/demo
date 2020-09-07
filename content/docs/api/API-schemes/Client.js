export default {
  name: 'Client',
  fields: [
    {
      name: 'clusterId',
      type: 'string',
      description: 'Unique identifier for the cluster'
    },
    {
      name: 'key',
      type: 'string',
      description: 'Unique identifier for the client'
    },
    {
      name: 'publicCertificates',
      type: 'Array<string>',
      description: 'Public clients certificates'
    },
    {
      name: 'info',
      type: 'nullable string',
      description: 'Public client information'
    }
  ],
  example: `{
"clusterId": "abb755c40618426ead3384f81807586d",
"key": "QRM1",
"publicCertificates": [],
"info": "QRM1 public data"
}`
};
