---
title: Versioning
description: API Versioning for Kekker Platform
prev: Handling Errors
next: API List
sandboxPromo: true
---

# Versioning

Kekker uses **http headers based API-versioning**. Versions are marked as X.. For example, 1.4, where:
* X-major version
* Y-minor version

Major version is extended when the logic of calls is changed or minor versions are overloaded. 
A concrete method version should be marked in the header x-api-version. A default version is used if the header is blank. 
You can get a list of versions supported by the method in the header api-supported-versions.
