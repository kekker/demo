export default {
  name: 'Deal',
  children: ['Party', 'Parameter', 'Transition', 'DealFile', 'DealHistory'],
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
      name: 'version',
      type: 'integer',
      description: 'Actual deal version'
    },
    {
      name: 'status',
      type: 'string',
      description: 'Actual deal state'
    },
    {
      name: 'Remark',
      type: 'string',
      description: 'Actual remark'
    },
    {
      name: 'parent',
      type: 'string',
      description: 'Global identifier for the parent deal'
    },
    {
      name: 'appRef',
      type: 'nullable string maxLength: 32',
      description: 'Referential information about app'
    },
    {
      name: 'parties',
      type: 'Array<Party>',
      description: 'List of the deals participants'
    },
    {
      name: 'parameters',
      type: 'Array<Parameter>',
      description: 'List of the deals parameters'
    },
    {
      name: 'transitions',
      type: 'Array<Transition>',
      description: 'Deal state transitions map'
    },
    {
      name: 'files',
      type: 'Array<DealFile>',
      description: 'Deal files'
    },
    {
      name: 'History',
      type: 'Array<DealHistory>',
      description: 'History of states changes'
    }
  ],
  example: `{
  "dealId": "ad04c39314184ac0847304fc22eaac75:57af8d5e2cde483b84f761038bd902ff",
  “localDealId”: 3502,
  "kind": "FirstDeal",
  "version": 3,
  "status": "CONFIRMED",
  "parent": null,
  "appRef": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "parameters": [
    {
      "key": "Item",
      "value": "Pepper"
    },
    {
      "key": "Quantity",
      "value": "10"
    }
  ],
  "parties": [
    {
      "key": "QRM1",
      "role": "SENDER"
    },
    {
      "key": "QRM2",
      "role": "RECEIVER"
    }
  ],
  "transitions": [
    {
      "status": "NEW",
      "statusNext": "SENT",
      "roles": ["SENDER"]
    },
    {
      "status": "SENT",
      "statusNext": "CONFIRMED",
      "roles": ["RECEIVER"]
    },
    {
      "status": "CONFIRMED",
      "statusNext": "Closed",
      "roles": [ "SENDER", "RECEIVER" ]
    }
  ],
  "files": [
    {
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
    }
  ],
  "history": [
    {
      "status": "SENT",
      "version": 2,
      "remark": "REMARK",
      "executor": "CLIENT1"
    },
    {
      "status": "CONFIRMED",
      "version": 3,
      "remark": "REMARK2",
      "executor": "CLIENT2"
    }
  ]
}`
};
