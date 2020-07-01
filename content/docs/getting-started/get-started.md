---
title: Get Started
description: Get Started - a quickstart to Kekker Platform
next: Main Concepts
sandboxPromo: true
---

# Get started

## Overview

### [Main Concepts](/docs/getting-started/main-concepts.html)
Kekker provides infrastructure and middleware for building decentralized applications without any 
prior blockchain expertise. 

Build decentralized apps on top of any popular blockchain or other distributed technologies using 
Kekker APIs and host them on your own infrastructure or with Kekker hosting services. 

We use abstractions called Deals to pass data between parties. 
Set your own Deal with the deal participants, roles, scenario steps, transition map and other requisites 
for your business process. Find out more on the [Main Concepts](/docs/getting-started/main-concepts.html) page.

### [Sandbox](/docs/getting-started/sandbox.html)
Initially, most users’ first exposure to the Kekker solutions will be through the [Sandbox](/docs/getting-started/sandbox.html). 
It provides a range of free, ready-to-use infrastructures based on the most popular Distributed 
Ledger Technologies: Quorum, Hyperledger Fabric, Ethereum and Corda. 

Test them and choose the one that best fits your needs while building your app. 
If you realize at any point another blockchain is more fitting, no worries; with Kekker, 
you can easily migrate your app to another option. 

When you are ready, transfer your app to your own infrastructure or use our commercial 
infrastructure hosting and support services.

### [Tools](/docs/getting-started/tools.html)
There's no easier way to get the ball rolling than through cURL. 
Let's start by testing our setup. Open up command prompt and enter the following:  `curl google.com`

![cURl example](/assets/curl.gif)

***

## Start building with Kekker in 5 easy steps
### Step 1: Create a Kekker account
Doing anything interesting with the Kekker API requires authentication. Hit the Sandbox Access button, fill out the form and receive your access credentials in your inbox in no time.

### Step 2: Hello World!
Use your sandbox Channel and Authorization access to process a transaction between two blockchain nodes. 
Using a post-method call, you will create a simple Deal with the ‘Created’ status on one node, 
and then check if it is replicated on the other node:

* Copy your Sandbox Channel and Authorization credentials from the Welcome email from info@kekker.com
* In the Welcome message, hit the Scenarios button or click here to get to the Hello World Scenario 
* Choose your preferred blockchain cluster from Quorum, Hyperledger Fabric, public Ethereum, or Corda available in the Sandbox
* Paste your Channel and Authorization credentials into the call example
* Copy the command, paste it into the command line and run it

### Step 3: Get to know the Scenarios
Go through the Scenarios to get ideas on how to use Deals in different use cases. 
Each case contains a business description and a script consisting of a sequence of API calls. 
Execute the scripts in the command line or terminal.

Cases are presented in order of increasing complexity and each subsequent 
case demonstrates the platform’s new features. You are free to use any script as is or to change 
it as per your requirements. You can also create your own transition map as per your business process. 

<terminal window gif or screenshot>

### Step 4: Understanding the APIs
The Kekker API design allows you to create a functional application, or integration, quickly and easily. All of the Kekker APIs are organized around REST. All API calls to Kekker Sandbox nodes should be made to the corresponding http://nodeID.kekker.com base domain. JSON will be returned in all responses, including errors. The APIs are designed to have predictable, straightforward URLs and to use HTTP response codes to indicate API errors.
<terminal window gif or screenshot>

### Step 5: Start building!
Kekker provides a variety of development tools and support options. 

You can use HTTPS request tools like Postman, 
Paw or Insomnia to quickly and easily test API requests during development. 
HTTPS request tools provide customized environments and parameterization of API calls that 
let you call endpoints without having to write code.

If you have any questions about Kekker check the FAQ page or fill out the contact form.
