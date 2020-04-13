---
title: Basic Deal
description: Hello World Kekker Scenario example
next: Purchase Order
prev: Handling Errors
---

# "Hello, World!"
___
## Basic Deal scenario shows the simplest case of a transaction among nodes.

The participant called Sender initiates deal at the first node. 
The second participant called Receiver detects deal initiating at the other node.  
___

### Transaction parties
Sender: `node PrivEth-1`

Receiver: `node PrivEth-2`

### The script consists of the following sequential steps:
1. At **Sender** node create a Deal with the the parallel setting the *Created* state
2. Make sure at **Receiver** node the Deal exists and status is equal to *Created*

### Pre-adjustment
> **Attention!** 
>
> In the call case the ID is replaced with (UID) word - you need to replace it with your obtained ID when creating the Deal at Step 1.

> **Attention!** 
>
> In queries in the headers *CHANNEL*, *AUTHORIZATION* you must use the personal identifier you received during registration. This will allow not to interfere with the simultaneous work of several users, as well as facilitate the work of the Technical Support service if you have any questions. The query examples use the personal identifier Demo.

For more information about authorization, visit [API: Authorization Page](/docs/getting-started/authorization.html)

If you run into any error, visit [API: Errors Page ](/docs/getting-started/errors.html)

You can to use [Postman script](https://documenter.getpostman.com/view/10819849/SzYgPtzV)
or make requests above step by step


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
      "role": "Sender"
    },
    {
      "key": "CLIENT2",
      "role": "Reciever"
    }
  ],
  "status": "Created"
}
```

#### Call example
``` bash{1-100}
curl 
-X POST "http://democlient1.kekker.com/api/deals" 
-H "Accept: application/json" 
-H "Channel: {CHANNEL}" 
-H "Content-Type: application/json" 
-H "Authorization: {AUTHORIZATION}" 
-d "
{
  \"dealUid\": null,
  \"kind\": "FirstDeal",
  \"parties\": [
    {
      \"key\": \"CLIENT1\",
      \"role\": \"Sender\"
    },
    {
      \"key\": \"CLIENT2\",
      \"role\": \"Reciever\"
    }
  ],
  \"status\": \"Created\"
}"
```

#### Response example

If everything is fine you'll receive response code `200`. The Deal identifier is in the response body [UID]. Save it and add to further requests.

## 2. Make sure at `Reciever` node the Deal status is Created
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

#### Response example (check status)
```json
{
    "uid": "6e4c83cc-874a-41c5-b416-a796ba7b95fb",
    "kind": "FirstDeal",
    "status": "Created",
    "remark": "",
    "parameters": [],
    "parties": [
        {
            "key": "CLIENT1",
            "role": "Sender"
        },
        {
            "key": "CLIENT2",
            "role": "Reciever"
        }
    ],
    "files": [],
    "history": [
        {
            "status": "Created",
            "party": {
                "key": "CLIENT1",
                "role": "Sender"
            },
            "remark": "",
            "version": 2
        }
    ],
    "statusMap": []
}
```
