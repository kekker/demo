---
title: Authorization
description: Authorization for Kekker Sandbox
next: Handling Errors
---

# Authorization

In order to perform actions with the Kekker platform API, you need to add an authorization header to all your requests. 
We use **Basic Authorization**, which is a string in the form of:
```shell
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
`Basic` word is followed by a BASE64 string constructed from your `login:password`.
  
### Create your header in a few steps:
1. Get your **login** and **password** and form a string like `your_login:your_password`
2. Copy it, go to any online tool for encoding a BASE64 string and encode your credentials
3. Provide an `Authorization` header with content `Basic` followed by the encoded string
4. Make sure your header is included in every request.
