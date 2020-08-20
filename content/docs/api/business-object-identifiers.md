---
title: Business object identifiers
description: Business object identifiers for Kekker Platform
prev: About
next: File operations
sandboxPromo: true
---

# Business object identifiers

The purpose of the Kekker API is working with abstract business objects, as well as with their environment: 
files, queues of operations, events. 

Users can use business object identifiers in API operations which uniquely identify specific instances of business 
objects.

#### The Kekker platform assigns each business object two types of identifiers:
* Local identifier of the business object
* Unique platform identifier of the business object.

> These are equally important in a particular node’s API operations and are used identically.

## The Identifiers features
### Local Identifier
A local identifier is assigned as soon as the business object creation operation is registered and is immediately 
returned to the business application as part of the operation response. 

In addition, a local identifier is assigned to a business object created on another node the first time that business 
object is “captured” by that node. A local identifier allows you to uniquely identify an instance of a business object 
on a given node. But on different nodes, the same business object will have different local identifiers. 

Roughly speaking, the local identifier is the primary key of an object record in the corresponding Adapter table for 
a given Node. The local identifier looks like this - `01234567` - a fairly short number sequence.

### Unique Platform Identifier
The unique platform identifier is generated during the operation of creating a business object and its value becomes 
known only when it is successfully completed.

A creator node can obtain a platform identifier by requesting the result of an operation to create a corresponding business object 
(see “[Interacting with Operation Queues](/docs/api/interaction-with-operation-queues.html)”). Unlike a local identifier, a platform-unique identifier is propagated across hosts along with a business object and 
thus uniquely identifies an instance of a business object regardless of the host where the API request is made.

The platform unique identifier is in the form of two 32-bit hexadecimal numbers connected 
by a separator: 
```e3b45e60471e4ba18887bac2b49110d4: 7dfdaf0d6d8241eeb155d88f88db2012```

#### In short:
* A **local identifier** uniquely identifies a business object, but only within a particular node;
* The **unique platform identifier** uniquely identifies a business object on any node within a network or a cluster 
of networks.

### Why two types of identifiers?
The unique platform identifier becomes known only in the process of performing the operation of creating a business 
object. 

In some application architectures it is more convenient to immediately associate an API identifier with the 
created business object, and then, without waiting for the creation operation to complete, enqueue the change 
operations for this business object. In such a case, a local identifier is used as an “instant” identifier.

### Where can a local identifier not be used?
As noted above, both types of identifiers are absolutely equivalent in API operations within a particular node. 

However, if you want to share a link to one business object nested in another business object’s data files, 
then you must use a unique platform identifier, e.g. a page number (local identifier) is a sufficient identifier 
within a single book; however, if you want to share a link to a different book, you need to specify that book’s 
title (unique platform identifier). 

