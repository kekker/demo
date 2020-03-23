# Init deal

> **POST** {baseUrl}/api/deals

{% tabs %}
{% tab title="Request" %}
#### Body

| Parameter | Type | Description |
| :--- | :--- | :--- |
| createdeal                                 \(required\) | object | root request object |
| createdeal.dealUid             \(optional\) | string \($uuid\) | unique identity |
| createdeal.kind        \(required\) | string \[1-32\] | deal template \(see [Get deal templates](get-deal-templates.md)\) |
| createdeal.parties   \(required\) | Array&lt;object&gt; | deal participants |
| createdeal.parties.key \(required\) | string \[1-32\] | participant key \(see [Get clients](get-clients.md) \) |
| createdeal.parties.role \(required\) | string \[1-32\] | participant role in accordance to deal template role model |
| createdeal.parameters \(optional\) | Array&lt;Object&gt; | initial deal parameters \(deal participants can add or change parameters during deal flow\) |
| createdeal.parameters.key \(required\) | string \[1-32\] | unique parameter name  |
| createdeal.parameters.value \(required\) | string \[1-32\] | parameter value |

#### Example

```javascript
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
  ],
}
```
{% endtab %}

{% tab title="Response" %}
{% hint style="success" %}
200: OK
{% endhint %}

#### Response model

string \($uuid\)

#### Description

Returns deal unique identity. \(specified in the request or generated\) 

#### Example

```text
"2adc2d34-3992-4438-81e8-7c535aa38651"
```
{% endtab %}
{% endtabs %}



