---
title: Versioning
description: API Versioning for Kekker Platform
prev: Handling Errors
next: API List
sandboxPromo: true
---

# Versioning

We use **http headers based** versioning API. A version is marked as X.Y. For example, 1.4 where:
* X-major version
* Y-minor version

A major version is changed when a call logic is changed or a minor version is overloaded. 

X-api-version header is used during calling to function to define a concrete version. If a header is not defined, 
a  default version will be used. 

A list of versions supported by the method is returned from the server in the *"api-supported-versions"* header. 
