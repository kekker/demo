---
title: Sandbox
description: Kekker Sandbox overview
next: Authorization
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

The clusters interact with each other via a dedicated trunk private Ethereum network.

### Differences from production environment
The Sandbox contains only test data and is completely separate from your production account.

All API endpoints have a base URL of [https://democlient1.kekker.com/](https://democlient1.kekker.com/) instead of [https://api.kekker.com/](https://api.kekker.com/)

> Real commercial data should never be used in the Sandbox.

### Transactions behavior in Private and Public Networks
Unlike transactions in Private Networks, which are processed within a few minutes, transactions in Public Networks may require up to **15 minutes** until they are processed.

### Sandbox access

After filling in the registration form you will receive email to the specified email address with the sanbox access information:
* UID ChannelID is necessary for working with the sandbox and should be provided each time you access the http methods
* Login, password and their base64 form (Authentication header)
* A file with settings to run test Postman script

### Tools needed for sandbox

Feel free to use your favorite http request tools to access the sandbox services. We recommend using the curl command-line tool for transferring data using various protocols. 
Launch your command-line processor and run `curl google.com`. If you see the html code:

```html
<HTML>
    <HEAD>
    <meta http-equiv="content-type" 
          content="text/html;charset=utf-8">
    <TITLE>301 Moved</TITLE>
    </HEAD>
    <BODY>
        <H1>301 Moved</H1>
        The document has moved
        <A HREF="http://www.google.com/">
            here
        </A>
    </BODY>
</HTML>
```
you have the curl command-line tool on your machine and can execute scripts for the sandbox.


### Description

If you are a Linux user the cURL tool must be installed on your machine along with the operating system. 
If this is not the case or you want to update the tool check the distributions and installation instructions at [https://curl.haxx.se/download.html](https://curl.haxx.se/download.html)

If you are a Windows user please follow these simple steps:
* Download the app from [https://curl.haxx.se/windows/](https://curl.haxx.se/windows/)
* Unzip the downloaded archive to any directory `<root_path>`
* Install certificate `<root_path>\bin\curl-ca-bundle.crt` to your local storage
* Add path `<root_path>\bin` to the `Path`variable
* Restart your command-line tool and run `curl google.com`


