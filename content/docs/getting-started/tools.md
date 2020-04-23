---
title: Tools
description: Tools needed to run Sandbox Scenarios
next: Basic Deal
prev: Sandbox
---

# Tools

## Postman

Postman is a handy tool to run API commands in a user-friendly interface. 
To open Postman click Run in Postman on top of the scenario description page. 

In Postman you will see pre-configured collection of API calls for Basic Deal scenario

To set up your individual parameters click Edit on Purchase Order collection

Go to Variables tab and fill in Login, Password and Channel from email. Click Update.


## cURL

You can simply use requests examples from scenario description. All you need is to fill in your Channel (from the Sandobx registration email) and add Authorization to requests headers.

Feel free to use your favorite HTTP request tools to access the Sandbox services. We recommend using the cURL command-line tool for transferring data using various protocols. 
Launch your command-line processor and run `curl google.com`. If you see the following HTML code you have the cURL command-line tool on your machine and can execute scripts for the Sandbox:

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
