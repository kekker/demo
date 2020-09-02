---
title: File operations
description: File operations for Kekker Platform
prev: Business object identifiers
next: Operations with networks
sandboxPromo: true
---

# File operations

The Kekker Platform Adapter and a business app can interact with files together in two ways:
* File exchange via API operations:
    * `POST /api/files` - can upload a file to the platform. A **unique file identifier Uid** is formed when 
    an operation is successfully completed.
    * `GET /api/files/{uid}` - can receive a file from the platform by a unique Uid identifier.

* File exchange via a shared file system.

    The adapter and the business app can use a shared file system, or their local file systems can get access to each other. 
    In this case, files can be identified with their local way in terms of the adapter file system.

> **See API documentation: [API: File Requests](/docs/api/requests-files.html)**

The user's app can work with a Sandbox in the first way of interaction, as there is no connection between a user’s 
file system and a Sandbox local file system.
That is why a business app should complete a `POST /api/files` operation for each file shared via the Adapter and use 
an obtained **fileUid** for all API-operations related to the file.

Your app should use a `GET /api/files/{fileUid}` operation to get a file content, received from other nodes, and the 
Adapter will send a fileUid related to a given business-object.