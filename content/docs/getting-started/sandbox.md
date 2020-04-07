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

The clusters interact with each other via a dedicated trunk network.

### Sandbox access

After filling in the registration form you will receive an email to the specified email address with the Sanbox access information:
* Your UID CHANNELID is necessary for working with the Sandbox and should be provided each time you access the HTTP methods
* Your login, password and their base64 form (Authentication header)
* A file with settings to run test Postman script

# Tools for Sandbox

## Postman

Postman is a handy tool to run API commands in a user-friendly interface. 
To open Postman click Run in Postman on top of the scenario description page. 

In Postman you will see pre-configured collection of API calls for Basic Scenario

To set up your individual parameters click Edit on Purchase Order collection

Go to Variables tab and fill in Login, Password and Channel from email. Click Update.


## cURL

You can simply use requests examples from scenario description. All you need is to fill in your Channel (from the Sandobx registration email) and add Authorization to requests headers.

Feel free to use your favorite HTTP request tools to access the Sandbox services. We recommend using the cURL command-line tool for transferring data using various protocols. 
Launch your command-line processor and run `curl google.com`. If you see the following HTML code you have the cURL command-line tool on your machine and can execute scripts for the Sandbox:

```html
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>
```

### Windows

If you are a Windows user please follow these simple steps:
* Download the app from [https://curl.haxx.se/windows/](https://curl.haxx.se/windows/)
* Unzip the downloaded archive to any directory `<root_path>`
* Install certificate `<root_path>\bin\curl-ca-bundle.crt` to your local storage
* Add path `<root_path>\bin` to the `Path`variable
* Restart your command-line tool and run `curl google.com`

### Linux

If you are a Linux user the cURL tool must be installed on your machine along with the operating system. 
If this is not the case or you want to update the tool check the distributions and installation instructions at [https://curl.haxx.se/download.html](https://curl.haxx.se/download.html)

