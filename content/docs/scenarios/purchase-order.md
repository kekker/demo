---
title: Purchase Order
description: Issue, adjust and submit a Purchase Order
prev: Basic Deal
sandboxPromo: true
---

# Issue, adjust and submit a Purchase Order

Here we will practice with a simple Deal for two parties. You will learn how to create Deal, switch Deal steps and how the information will spread between parties. 

On each step you will send API commands exactly as the participants would. For this case we keep a private blockchain network. Each party has its own node. In real life these would be nodes of decentralised apps (e.g. cargo tracking platform).

This case is conducted in a **Private Ethereum network (PrivEth)**.
This case demonstrates the distribution of a transaction among nodes and switching the status of a transaction.
It uses a predefined smart contract with the FirstDeal transaction type.

### How to start

To run Purchase Order scenario you can use any command-line tool for IT-savvy users.
We recommend using cURl. Find more at our [Tools guide](/docs/getting-started/tools.html).


### Transaction parties

Buyer: `node PrivEth-1`

Seller: `node PrivEth-2`


### Scenario overview

**Buyer** issues a Purchase Order to the outside **Seller**, initiating the sales transaction. 
**Buyer** provides the Purchase Order with the following information:
* Number of the Purchase Order
* Items being purchased 
* Delivery date 
* Quantity
and other payment terms, ship-to address, invoicing instructions and the name of the purchasing office. 
Seller makes adjustments (if allowed to) and accepts the purchase order (it becomes a binding contract on both buyer and seller).

### Status transition map (non-controlled)
* Created
* Issued
* Adjusted
* Ordered


### The script consists of the following sequential steps:
1. At **Buyer** node create a Deal with the following attributes: *DocNumber=123, Item=Pepper, DeliveryDate=2020-08-08, Quantity=10*
2. At **Buyer** node change the Deal status to *Issued*
3. Make sure on **Seller** node the Deal status is *Issued*
4. At **Seller** node change the Deal status to *Adjusted*, add attribute *PaymentDate=2020-01-02* and change attribute *DeliveryDate=2020-08-09*
5. Make sure at **Buyer** node the Deal status is *Adjusted*
6. At **Buyer** node change the Deal status to *Ordered*

### Pre-adjustment
> **Attention!** 
>
> In the call case the ID is replaced with (UID) word - you need to replace it with your obtained ID when creating the Deal at Step 1.

> **Attention!** 
>
> In queries in the headers *CHANNEL*, *AUHORIZATION* you must use the personal identifier you received during registration. This will allow not to interfere with the simultaneous work of several users, as well as facilitate the work of the Technical Support service if you have any questions. The query examples use the personal identifier Demo.

For more information about authorization, visit [API: Authorization Page](/docs/getting-started/authorization.html)

If you run into any error, visit [API: Errors Page ](/docs/getting-started/errors.html)

## 1. Create a Deal

Use `POST`-method call `/api/deals/`. The json specification of the transaction is indicated as the request data. In our case:

#### Body data
```json
{
  "dealUid": null,
  "kind": "FirstDeal",
  "parties": [
    {
      "key": "CLIENT1",
      "role": "Buyer"
    },
    {
      "key": "CLIENT2",
      "role": "Seller"
    }
  ],
  "parameters": [
    {
      "key": "DocNumber",
      "value": "123"
    },
    {
      "key": "Item",
      "value": "Pepper"
    },
    {
      "key": "DeliveryDate",
      "value": "2020-08-08"
    },
    {
      "key": "Quantity",
      "value": "10"
    }
  ]
}
```

#### Call example
```bash{1-100}
curl 
-X POST "http://democlient1.kekker.com/api/deals" 
-H "Accept: application/json" 
-H "Channel: {CHANNEL}" 
-H "Content-Type: application/json" 
-H "Authorization: {AUTHORIZATION}" 
-d "
{ 
  \"dealUid\": null, 
  \"kind\": \"FirstDeal\", 
  \"parties\": [ 
      { 
        \"key\": \"CLIENT2\",
        \"role\": \"Seller\" 
      }, 
      { 
        \"key\": \"CLIENT1\", 
        \"role\": \"Buyer\" 
      } 
   ], 
  \"parameters\": [ 
      { 
        \"key\": \"DocNumber\", 
        \"value\": \"123\" 
      }, 
      { 
        \"key\": \"Item\", 
        \"value\": \"Pepper\" 
      }, 
      { 
        \"key\": \"DeliveryDate\",
        \"value\": \"2020-08-08\" 
      }, 
      { 
        \"key\": \"Quantity\", 
        \"value\": \"10\" 
      } 
    ]
}"
```

#### Response example

If everything is fine you'll receive response code `200`. The Deal identifier is in the response body [UID]. Save it and add to further requests.


## 2. At Buyer node change the Deal status to Issued

Use `POST`-method call `/api/deals/setstatus`. The JSON specification of the new Deal status is indicated as the request data. In our case:

#### Body data
```json
{
  "dealUid": "{UID}",
  "status": "Issued",
  "remark": null,
  "parameters": []
}
```

#### Call example
```bash{1-100}
curl 
-X POST "http://democlient1.kekker.com/api/deals/setstatus" 
-H "Accept: application/json" 
-H "Channel: {CHANNEL}" 
-H "Content-Type: application/json" 
-H "Authorization: {AUTHORIZATION}" 
-d "
{
  \"dealUid\": \"{UID}\",
  \"status\": \"Issued\",
  \"remark\": null,
  \"parameters\": []
}"
```

#### Response example

If all is well, the response code is `200`. The response body is empty.

## 3. Make sure on Seller node the Deal status is Issued
Use `GET`-method call `/api/deals/{UID}` where `{UID}` is the Deal identifier

> **Attention!** 
>
> Wait for 5 minutes after step [2] before executing these queries

#### Call example (the node URL is different)

```bash{1-100}
curl 
-X GET "http://democlient2.kekker.com/api/deals/{UID}" 
-H "Accept: application/json" 
-H "Channel: {CHANNEL}" 
-H "Authorization: {AUTHORIZATION}"
```

#### Response example (check status and parameters)
```json
{
    "uid": "{UID}",
    "kind": "FirstDeal",
    "status": "Issued",
    "remark": "1",
    "parameters": [
        {
            "key": "DocNumber",
            "value": "123"
        },
        {
            "key": "Item",
            "value": "Pepper"
        },
        {
            "key": "DeliveryDate",
            "value": "2020-08-08"
        },
        {
            "key": "Quantity",
            "value": "10"
        }
    ],
    "parties": [
        {
            "key": "CLIENT2",
            "role": "Seller"
        },
        {
            "key": "CLIENT1",
            "role": "Buyer"
        }
    ],
    "files": [],
    "history": [
        {
            "status": "Issued",
            "party": {
                "key": "CLIENT1",
                "role": "Buyer"
            },
            "remark": "1",
            "version": 2
        }
    ],
    "statusMap": []
}
```

## 4. At Seller node change the Deal status to Adjusted, add attribute PaymentDate and change attribute DeliveryDate

Use `POST`-method call `/api/deals/setstatus`. The JSON specification of the new transaction status is indicated as the request data. In our case:

#### Body data
```json
{
  "dealUid": "{UID}",
  "status": "Adjusted",
  "remark": "2",
  "parameters": [
  	{
      "key": "PaymentDate",
      "value": "2020-01-02"
    },
    {
      "key": "DeliveryDate",
      "value": "2020-08-09"
    }
  	]
}
```

#### Call example
```bash{1-100}
curl 
-X POST "http://democlient2.kekker.com/api/deals/setstatus" 
-H "Accept: application/json" 
-H "Channel: {CHANNEL}" 
-H "Content-Type: application/json" 
-H "Authorization: {AUTHORIZATION}" 
-d "
{
  \"dealUid\": \"{UID}\",
  \"status\": \"Adjusted\",
  \"remark\": null,
  \"parameters\": [
  	{
      \"key\": \"PaymentDate\",
      \"value\": \"2020-01-02\"
    },
    {
      \"key\": \"DeliveryDate\",
      \"value\": \"2020-08-09\"
    }
  	]
}"
```

#### Response example

If all is well, the response code is `200`. The response body is empty.

## 5. Make sure at Buyer node the Deal status is Adjusted
Use `GET`-method call `/api/deals/{UID}` where `{UID}` is the Deal identifier

> **Attention!**
>
> Wait for 2 minutes after step [4] before executing these queries

#### Call example
```bash{1-100}
curl 
-X GET "http://democlient1.kekker.com/api/deals/{UID}" 
-H "Accept: application/json" 
-H "Channel: {CHANNEL}" 
-H "Authorization: {AUTHORIZATION}"
```

#### Response example
```json
{
    "uid": "{UID}",
    "kind": "FirstDeal",
    "status": "Adjusted",
    "remark": "2",
    "parameters": [
        {
            "key": "DocNumber",
            "value": "123"
        },
        {
            "key": "Item",
            "value": "Pepper"
        },
        {
            "key": "DeliveryDate",
            "value": "2020-08-09"
        },
        {
            "key": "Quantity",
            "value": "10"
        },
        {
            "key": "PaymentDate",
            "value": "2020-01-02"
        }
    ],
    "parties": [
        {
            "key": "CLIENT2",
            "role": "Seller"
        },
        {
            "key": "CLIENT1",
            "role": "Buyer"
        }
    ],
    "files": [],
    "history": [
        {
            "status": "Issued",
            "party": {
                "key": "CLIENT1",
                "role": "Buyer"
            },
            "remark": "1",
            "version": 2
        },
        {
            "status": "Adjusted",
            "party": {
                "key": "CLIENT2",
                "role": "Seller"
            },
            "remark": "2",
            "version": 3
        }
    ],
    "statusMap": []
}
```

## 6. At Buyer node change the Deal status to Ordered

Use `POST`-method call `/api/deals/setstatus`. The JSON specification of the new transaction status is indicated as the request data. In our case:

#### Body data
```json
{
  "dealUid": {UID},
  "status": "Ordered",
  "remark": null,
  "parameters": []
}
```

#### Call example
```bash{1-100}
curl 
-X POST "http://democlient1.kekker.com/api/deals/setstatus" 
-H "Accept: application/json" 
-H "Channel: {CHANNEL}" 
-H "Content-Type: application/json" 
-H "Authorization: {AUTHORIZATION}" 
-d "
{
  \"dealUid\": \"{UID}\",
  \"status\": \"Ordered\",
  \"remark\": null,
  \"parameters\": []
}"
```

#### Response example

If all is well, the response code is `200`. The response body is empty.

