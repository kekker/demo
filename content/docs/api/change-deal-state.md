# Change deal state

> **POST** {baseUrl}/api/deals/setstatus

{% tabs %}
{% tab title="Request" %}
#### Body

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <p>setstatus</p>
        <p>(required)</p>
      </td>
      <td style="text-align:left">object</td>
      <td style="text-align:left">root request object</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>setstatus.dealUid</p>
        <p>(required)</p>
      </td>
      <td style="text-align:left">string ($uuid)</td>
      <td style="text-align:left">deal unique identity</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>setstatus.remark</p>
        <p>(optional)</p>
      </td>
      <td style="text-align:left">string</td>
      <td style="text-align:left">comment for change state action</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>setstatus.parameters</p>
        <p>(optional)</p>
      </td>
      <td style="text-align:left">Array&lt;object&gt;</td>
      <td style="text-align:left">new or changed deal parameters</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>setstatus.parameters.key</p>
        <p>(required)</p>
      </td>
      <td style="text-align:left">string [1-32]</td>
      <td style="text-align:left">unique parameter name</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p>setstatus.parameters.key</p>
        <p>(required)</p>
      </td>
      <td style="text-align:left">string [1-32]</td>
      <td style="text-align:left">parameter value</td>
    </tr>
  </tbody>
</table>
{% endtab %}

{% tab title="Respose" %}
{% hint style="success" %}
200: OK
{% endhint %}

#### Response body

empty
{% endtab %}
{% endtabs %}

#### Example

```javascript
{
  "dealUid": "2adc2d34-3992-4438-81e8-7c535aa38651",
  "status": "Adjusted_",
  "remark": "Delivery Date changed",
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

