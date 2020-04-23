---
title: Sandbox
description: Kekker Sandbox overview
next: Tools
prev: Main Concepts
---

# Sandbox

The Sandbox consists of two separate clusters based on a private and a public blockchain networks, respectively.

The private cluster based on a private Ethereum network contains 3 nodes:
* `democlient1.kekker.com`
* `democlient2.kekker.com`
* `democlient3.kekker.com`

![](https://lh6.googleusercontent.com/dPJFHMSUSl-6EMBplN0oFG0nBDXeKqLCj37LeqCPx5iXBfZ_4JeoT-CiU3sbXXnfBo9xh-Dj2BrgiFqX72HQ7SmB8omD9yKJzGkyMjpsuLirrqQZdwcPJWSif1SeJMlVQ_2D4cKj)

The public cluster is based on an Ethereum testnet Rinkeby (see link in a new tab) and contains 2 nodes:
* `pubdemoclient1.kekker.com`
* `pubdemoclient2.kekker.com`

The clusters interact with each other via a dedicated trunk network.

### Differences from production environment
The Sandbox contains only test data and is completely separate from your production account.

All API endpoints have a base URL of [https://democlient1.kekker.com/](https://democlient1.kekker.com/) instead of [https://api.kekker.com/](https://api.kekker.com/)

> Real commercial data should never be used in the Sandbox.

### Transactions behavior in Private and Public Networks
Unlike transactions in Private Networks, which are processed within a few minutes, transactions in Public Networks may require up to **15 minutes** until they are processed.

### Sandbox access

After filling in the registration form you will receive an email to the specified email address with the Sanbox access information:
* Your UID CHANNELID is necessary for working with the Sandbox and should be provided each time you access the HTTP methods
* Your login, password and their base64 form (Authentication header)
* A file with settings to run test Postman script
