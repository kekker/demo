export default {
  name: 'ChangeState',
  children: ['Parameter', 'DealFile'],
  fields: [
    {
      name: 'status',
      type: 'string maxLength: 30',
      description: 'Goal state'
    },
    {
      name: 'remark',
      type: 'nullable string',
      description: 'The comment accompanying state'
    },
    {
      name: 'parameters',
      type: 'Array<Parameter>',
      description: 'List of the deals parameters'
    },
    {
      name: 'files',
      type: 'Array<DealFile>',
      description: 'List of linked files'
    }
  ],
  example: `{
  "status": "OfferOk",
  "remark": "Offer accepted",
  "parameters": [
    {
      "key": "Quantity",
      "value": "9"
    },
  "files": [
    {
      "kind": "Offer acceptance",
      "localId": "c19131e4-b9c1-4dce-8cae-b8d00f50fc61",
    },
    {
      "kind": "bill",
      "receivers": [“QRM1”],
      "localPath": “E:\\\\Files\\\\bill_1324.pdf”,
    }
  ],
  "status": "OfferOk",
  "remark": "Offer accepted",
}`
};
