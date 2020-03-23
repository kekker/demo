# Get deal

> **GET** {baseUrl}/api/deals/{uid}

{% tabs %}
{% tab title="Request" %}
#### Headers

#### Path parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| uid | string \($uuid\) | deal unique identity |

#### Example

```text
GET /api/deals/2adc2d34-3992-4438-81e8-7c535aa38651 HTTP/1.1
Host: democlient1.kekker.com
Channel: Demo
Accept: application/json
Authorization: Basic S2Vra2VyVXNlcjp6RGZqbTMz
```
{% endtab %}

{% tab title="Response" %}
{% hint style="success" %}
200: OK
{% endhint %}

#### Response body

object

#### Deal

| Parameter | Type | Description |
| :--- | :--- | :--- |
| uid | string \($uuid\) | unique identity |
| kind | string | unique template name |
| status | string | current deal state |
| remark | string | comment for last applied state |
| parameters | Array&lt;object&gt; | deal parameters  |
| parameters.key | string \[1-32\] | unique parameter name |
| parameters.value | string \[1-32\] | parameter value |
| parties | Array&lt;object&gt; | deal participants |
| parties.key  | string \[1-32\] | participant key \(see [Get clients](get-clients.md) \) |
| parties.role  | string \[1-32\] | participant role in accordance to deal template role model |
| files | Array&lt;object&gt; | available for requester deal files |
| files.fileUid | string \($uuid\) | unique file identity |
| files.filePath | string | server file path |
| files.fileKind | string | file use |
| files.state | string | state file added for |
| files.version | integer | deal flow state identity file added for |
| history | Array&lt;object&gt; | deal flow history |
| history.status | string | state  |
| history.party | object | applying transitions participant |
| history.remark | string | comment  |
| history.version | int | deal flow state identity |
| statusMap | Array&lt;object&gt; | role based state transitions map described for using deal template. Empty array indicates this template has no state map restrictions |
| statusMap.status | string \[9\] | source transition state |
| statusMap.statusNext | string \[9\] | goal transition state |
| statusMap.role | string | role of applying transitions participant |

#### Example

```javascript
{
    "uid": "2adc2d34-3992-4438-81e8-7c535aa38651",
    "kind": "FirstDeal",
    "status": "Ordered__",
    "remark": "3",
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
        },
        {
            "status": "Ordered__",
            "party": {
                "key": "CLIENT1",
                "role": "Buyer"
            },
            "remark": "3",
            "version": 4
        }
    ],
    "statusMap": []
}
```
{% endtab %}
{% endtabs %}



