---
title: Business object identifiers
description: Business object identifiers for Kekker Platform
prev: About
next: File operations
sandboxPromo: true
---

# Business object identifiers

The Kekker API works with abstract business-objects, related files, operation queues, and events. 
It is important to use correct identifiers in API calls to uniquely identify a specific instance of business-object.

#### There are two types of identifiers in Kekker:
* Local identifier - uniquely identifies a business-object within the current Node
* Unique Platform Identifier - uniquely identifies business-object within any node of a network, or a cluster of networks.

> They are equally important and are used identically.

## The Identifiers features

### Local Identifier
A local identifier uniquely identifies a specific instance of business-object in the current node.

 Local identifier is assigned when a business object is created, and your app gets it as an operation response. 
In addition, a local identifier is set to business-objects from other nodes on their first appearance in the current node.
Within **different nodes** one business-object has **different local identifiers**.

Roughly speaking, the local identifier is the primary key of an object record in the corresponding Adapter table for 
a given Node. The local identifier looks like this - `01234567` - a fairly short number sequence.

### Unique Platform Identifier
A unique platform identifier (UPI) uniquely identifies an instance of business-object within all nodes of the network. 
UPI is assigned when the business-object is successfully created. 

Node-creator can get a UPI by requesting the result of "Create" operation 
(see “[Interacting with Operation Queues](/docs/api/interaction-with-operation-queues.html)”). 
Unlike a local identifier, a platform-unique identifier is propagated across hosts along with a business object.

UPI looks like `e3b45e60471e4ba18887bac2b49110d4:7dfdaf0d6d8241eeb155d88f88db2012` - it consists of  two 32-bit hexadecimal 
numbers connected by a separator.

### Why are there two types of identifiers?
It takes some time to obtain a UPI identifier. You can get a local identifier immediately after business object 
creation and continue working with it right away. 

### Where the local identifier is not used?
As noted above, both types of identifiers are absolutely equivalent in API operations within a particular node. 

If you want to send a link to another business object in the data files, you have to use only UPI
(for example, if you want to refer to an insurance deal in a guarantee deal)

