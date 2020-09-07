export default {
  name: 'DealFile',
  fields: [
    {
      name: 'kind',
      type: 'string',
      description: 'File kind (“offer”, “ivoice”, etc.)'
    },
    {
      name: 'appRef',
      type: 'nullable string maxLength: 32',
      description: 'Referential information about app'
    },
    {
      name: 'localPath',
      type: 'string maxLength:256',
      description: 'Server side file path. (only if locald is null)'
    },
    {
      name: 'localId',
      type: 'string($uuid)',
      description: 'Unique local identifier for the uploaded file'
    },
    {
      name: 'mediaType',
      type: 'string',
      description: 'Preferred file extension'
    },
    {
      name: 'receivers',
      type: 'Array<string>',
      description: 'A list of participants\' keys, who got access to the file'
    }
  ],
  example: `{
  "kind": "OFFER",
  "appRef": "7b7a5542-e6e3-4543-b666-815550345713",
  "receivers": [
    "QRM1",
    "QRM2"
  ],
  "localPath": "E:\\\\Files\\\\bfdd4bef74bf4af5b09561a924c4a20b_main.txt",
  "localId": "c19131e4-b9c1-4dce-8cae-b8d00f50fc61",
  "version": 2,
  "status": "SENT"
}`
};
