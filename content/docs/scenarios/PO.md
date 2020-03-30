---
title: PO
description: Issue, adjust and submit a Purchase Order
prev: get started
---

# Issue, adjust and submit a Purchase Order.

This case is conducted in a **Private Ethereum network (PrivEth)**.
The case demonstrates the distribution of a transaction among nodes and switching the status of a transaction.
It uses a predefined smart contract with FirstDeal transaction type.

Buyer issues a Purchase Order to the outside Seller, initiating the sales transaction. 
Buyer provides the Purchase Order optional information:
* Number of the Purchase Order
* Items being purchased 
* Delivery date 
* Quantity
and other the payment terms, ship-to address, invoicing instructions and the name of the purchasing office. 
Seller makes adjustments (if allowed to) and accepts the purchase order (it becomes a binding contract on both the buyer and seller).

### Transaction parties
Buyer: node PrivEth-1
Seller: node PrivEth-2

### Status transition map (non-controlled)
* Created
* Issued
* Adjusted
* Ordered

### The script consists of the following sequential steps:
1. At `PrivEth-1` node create a Deal with the following attributes `DocNumber=123, Item=Pepper, DeliveryDate=2020-08-08, Quantity=10`
2. At `PrivEth-1` node change the Deal status to `Issued`
3. Make sure on `PrivEth-2` node the Deal status is `Issued` 
4. At `PrivEth-2` node change the Deal status to `Adjusted`, add attribute `PaymentDate=2020-01-02` and change attribute `DeliveryDate=2020-08-09`
5. Make sure at `PrivEth-1` node the Deal status is `Adjusted`
6. At `PrivEth-1` node change the Deal status to `Ordered`

> **Attention!** In the call case the ID is replaced with (UID) - you need to replace it with your obtained ID when creating the Deal at Step 1.

> **Attention!** In queries in the heading ** CHANNEL **, ** AUHORIZATION ** you must use the personal identifier you received during registration. This will allow not to interfere with the simultaneous work of several users, as well as facilitate the work of the Technical Support service if you have any questions. The query examples use the personal identifier Demo.


## 1. Creat a Deal

Use `POST`-method call `/api/deals/`. The json specification of the transaction is indicated as the request data. In our case:
```
{
  "dealUid": null,
  "kind": "FirstDeal",
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
<table>
  <tr>
    <th>Call example</th>
    <th>Response example</th>
  </tr>
  <tr>
    <td>
<pre>
  curl --request POST 'http://democlient1.kekker.com/api/deals' 
--header 'Content-Type: application/json' 
--header 'Channel: Demo' 
--header 'Authorization: Basic S2Vra2VyVXNlcjp6RGZqbTMz' 
--data-raw '{
  "dealUid": null,
  "kind": "FirstDeal",
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
}'
</pre>
    </td>
    <td>If everything is fine you'll receive response code 200. The Deal identifier is in the response body [UID]</td>
  </tr>
</table>


## 2. At `PrivEth-1` node change the Deal status to `Issued`

Use `POST`-method call `/api/deals/setstatus`. The JSON specification of the new Deal status is indicated as the request data. In our case:

```
{
  "dealUid": "{UID}",
  "status": "Issued___",
  "remark": null,
  "parameters": []
}
```
<table>
  <tr>
    <th>Call example</th>
    <th>Response example</th>
  </tr>
  <tr>
    <td>
      <pre>
curl --request POST 'http://democlient1.kekker.com/api/deals/setstatus' 
--header 'Content-Type: application/json' 
--header 'Channel: Demo' 
--header 'Accept: application/json' 
--data-raw '{
  "dealUid": "{UID}",
  "status": "Issued___",
  "remark": null,
  "parameters": []
}'
      </pre>
    </td>
    <td>If all is well, the response code is 200. The response body is empty.</td>
  </tr>
</table>

## 3. Make sure on `PrivEth-2` node the Deal status is `Issued` 
Use `GET`-method call `/api/deals/{UID}` where `{UID}` is the Deal identifier

> Attention! Wait for 5 minutes after step [2] before executing these queries

<table>
  <tr>
    <th>Call example (the node URL is different) </th>
    <th>Response example (check status and parameters)  </th>
  </tr>
  <tr>
    <td><pre>
curl --request GET 'http://democlient2.kekker.com/api/deals/{UID}
--header 'Channel: Demo'
--header 'Accept: application/json' 
--header 'Authorization: Basic S2Vra2VyVXNlcjp6RGZqbTMz' 
    </pre></td>
    <td>
<pre>
{
    "uid": "2adc2d34-3992-4438-81e8-7c535aa38651",
    "kind": "FirstDeal",
    "status": "Issued___",
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
            "status": "Issued___",
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
</pre>
    </td>
  </tr>
</table>


## 4. At `PrivEth-2` node change the Deal status to `Adjusted`, add attribute `PaymentDate` and change attribute `DeliveryDate`

Use `POST`-method call `/api/deals/setstatus`. The JSON specification of the new transaction status is indicated as the request data. In our case:

```
{
  "dealUid": "{UID}",
  "status": "Adjusted_",
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
<table>
  <tr>
    <th>Call example</th>
    <th>Response example</th>
  </tr>
  <tr>
    <td>
      <pre>
curl --request POST 'http://democlient2.kekker.com/api/deals/setstatus' 
--header 'Content-Type: application/json' 
--header 'Channel: Demo' 
--header 'Accept: application/json' 
--data-raw '{
  "dealUid": {UID},
  "status": "Adjusted_",
  "remark": null,
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
}'
      </pre>
    </td>
    <td>If all is well, the response code is 200. The response body is empty.</td>
  </tr>
</table>

## 5. Make sure at `PrivEth-1` node the Deal status is `Adjusted`
Use `GET`-method call `/api/deals/{UID}` where `{UID}` is the Deal identifier

> Attention! Wait for 2 minutes after step [4] before executing these queries

<table>
  <tr>
    <th>Call example (the node URL is different) </th>
    <th>Response example (check status and parameters) </th>
  </tr>
  <tr>
    <td><pre>
curl --request GET 'http://democlient1.kekker.com/api/deals/{UID}
--header 'Channel: Demo'
--header 'Accept: application/json' 
--header 'Authorization: Basic S2Vra2VyVXNlcjp6RGZqbTMz' 
    </pre></td>
    <td>
<pre>
{
    "uid": "2adc2d34-3992-4438-81e8-7c535aa38651",
    "kind": "FirstDeal",
    "status": "Adjusted_",
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
            "status": "Issued___",
            "party": {
                "key": "CLIENT1",
                "role": "Buyer"
            },
            "remark": "1",
            "version": 2
        },
        {
            "status": "Adjusted_",
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
</pre>
    </td>
  </tr>
</table>

## 6. At `PrivEth-1` node change the Deal status to `Ordered`

Use `POST`-method call `/api/deals/setstatus`. The JSON specification of the new transaction status is indicated as the request data. In our case:

```
{
  "dealUid": {UID},
  "status": "Ordered__",
  "remark": null,
  "parameters": []
}
```

<table>
  <tr>
    <th>Call example</th>
    <th>Response example</th>
  </tr>
  <tr>
    <td>
      <pre>
curl --request POST 'http://democlient1.kekker.com/api/deals/setstatus' 
--header 'Content-Type: application/json' 
--header 'Channel: Demo' 
--header 'Accept: application/json' 
--data-raw '{
  "dealUid": "856b6bb4-3a72-4e81-b34d-33966e46b268",
  "status": "Ordered__",
  "remark": null,
  "parameters": []
}'
      </pre>
    </td>
    <td>If all is well, the response code is 200. The response body is empty.</td>
  </tr>
</table>

