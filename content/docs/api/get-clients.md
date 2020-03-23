# Get clients

> **GET** {baseUrl}/api/clients

{% tabs %}
{% tab title="Request" %}
#### Headers
{% endtab %}

{% tab title="Response" %}
{% hint style="success" %}
200: OK
{% endhint %}

#### Response model

Array&lt;Clent&gt;

#### Client

| Parameter | Type | Description |
| :--- | :--- | :--- |
| key | string | unique participant key |
| data | string | public participant information |

#### Description

returns available deal participants

#### Example

```javascript
[
  {
    "key": "CLIENT1",
    "data": "CLIENT1 public data"
  },
  {
    "key": "CLIENT2",
    "data": "CLIENT2 public data"
  },
  {
    "key": "CLIENT3",
    "data": "CLIENT3 public data"
  }
]
```
{% endtab %}
{% endtabs %}



