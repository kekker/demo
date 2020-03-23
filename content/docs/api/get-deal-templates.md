# Get deal templates

> **GET** {baseUrl}/api/dealtemplates

{% tabs %}
{% tab title="Request" %}
#### Headers
{% endtab %}

{% tab title="Response" %}
{% hint style="success" %}
200: OK
{% endhint %}

#### Response model

Array&lt;DealTemplate&gt;

#### DealTemplate

| Parameter | Type | Description |
| :--- | :--- | :--- |
| dealKind | string | unique template name |
| uid | string \($uuid\) | unique identifier |
| description | string | business description |
| version | string | current template version |
| statusMap | Array&lt;Object&gt; | role based state transitions map. Empty array indicates this template has no state map restrictions |
| statusMap.status | string \[9\] | source transition state |
| statusMap.statusNext | string \[9\] | goal transition state |
| statusMap.role | string | role of applying transitions participant  |

#### Description

returns available deal templates

#### Example



#### Description

returns available deal participants

#### Example

```javascript
[
  {
    "dealKind": "DemoDeal1",
    "uid": "753c8082-da2c-43de-8c86-825e17755ca8",
    "description": "DemoDeal",
    "version": "1",
    "statusMap": [
      {
        "status": "*",
        "statusNext": "Status1__",
        "role": "Role1"
      },
      {
        "status": "Status1__",
        "statusNext": "Status2__",
        "role": "Role2"
      },
      {
        "status": "Status1__",
        "statusNext": "Status3__",
        "role": "Role2"
      }
    ]
  },
  {
    "dealKind": "FirstDeal",
    "uid": "83d90476-dffa-4299-8e79-d06605306fec",
    "description": "Simple deal template",
    "version": "1",
    "statusMap": []
  },
  {
    "dealKind": "LCDeal",
    "uid": "1f39ef0d-efcf-4b5e-8603-683ad59cadc2",
    "description": " Letter of Credit template with Seller, Buyer and Bank roles",
    "version": "1",
    "statusMap": [
      {
        "status": "*",
        "statusNext": "OfferReq_",
        "role": "Seller"
      },
      {
        "status": "OfferReq_",
        "statusNext": "OfferOk__",
        "role": "Buyer"
      },
      {
        "status": "OfferOk__",
        "statusNext": "LcReq____",
        "role": "Buyer"
      },
      {
        "status": "LcFail___",
        "statusNext": "LcReq____",
        "role": "Buyer"
      },
      {
        "status": "LcReq____",
        "statusNext": "LcFail___",
        "role": "Bank"
      },
      {
        "status": "LcReq____",
        "statusNext": "LcOk_____",
        "role": "Bank"
      },
      {
        "status": "LcOk_____",
        "statusNext": "CargoSent",
        "role": "Seller"
      },
      {
        "status": "CargoSent",
        "statusNext": "CargoGot_",
        "role": "Buyer"
      },
      {
        "status": "CargoGot_",
        "statusNext": "Payment__",
        "role": "Bank"
      },
      {
        "status": "Payment__",
        "statusNext": "Closed___",
        "role": "Seller"
      }
    ]
  }
]
```
{% endtab %}
{% endtabs %}

