---
title: Handling Errors
description: Handling errors from Kekker API requests
next: Purchase Order
---

# Handling Errors

You may receive several answers on your requests from the Kekker Platform API. 
The results of calls to Api methods can be divided by status codes of http response:

* **200** - the request was successful. The body of the answer contains an expected model.
* **400** - bad request. The answer body is as follows:
```json
{
    "ErrorMessage":"description of error"
}
```
* **500** - internal error. Always returns:
```json
{
    "ErrorMessage":"Internal error"
}
```
* **401** - authorization error. The body of the answer may appear in any shape.

