---
title: Operations with abstract business objects
description: Operations with abstract business objects for Kekker Platform
prev: Interaction with Operation queues
next: Authorization
sandboxPromo: true
---

# Operations with abstract business objects

## Operations with Abstract deal

> **See API documentation: [API: Abstract Business Objects Requests](/docs/api/requests-abstract-business-objects.html)**

Kekker API provides the following operations with business-object "Abstract deal":
* `GET /api/deals/templates` - obtaining a list of available deal templates
* `POST /api/deals` - creature of a Deal
* `POST /api/deals/{Id}` - update of a Deal
* `GET /api/deals` - obtaining a Deals list
* `GET /api/deals/{Id}` - obtaining information about concrete Deal state
* `GET /api/deals/{Id}/tech` - obtaining information about Deal technical characteristics

> Before creating an app, your app should make `GET /api/deals/templates` call and receive a list of available 
> Deal templates and templates descriptions as an array of structures **DealTemplate**:
> * *Kind* - Deal type
> * *Description* - template description
> * *Transitions* - a role map of possible transitions, carried inside a template, array of structures **Transition**:
>   * *Status* - an initial status
>   * *NextStatus* - a next status
>   * *Roles* - a list of roles, for which a transition is possible

As well, your app should request a member list of its network and related clusters - see 
"[Operations with networks/clusters and members lists](/docs/api/operations-with-networks.html)".

### Create a Deal
To create a Deal, your app has to make a `POST /api/deals operation` call with parameters:
* *Kind* - a Deal type (one of the Deal types, available with the request `GET /api/deals/templates`)
* *Parent* - DealId of the parents' Deal (not-obligatory)
* *AppRef* - referential information of a Business-application, limited to 32 symbols 
* *Parameters* - a list of contextual parameters, an array of structures **Parameter**:
    * *Key* - a parameter name
    * *Value* -  a parameter value
    
* *Parties* - a list of Deal participants, an array of structures **Party**:
    * *Key* - an identifier of participant (from the field  Key of the members list, which can be obtained with 
    a request `GET /api/clients` or `GET /api/clusters/{ClusterId}/clients` )
    * *Role* - participant's role
    
* *Transitions* - a role map of possible transitions, an array of structures **Transition**:
    * *Status* - an initial status
    * *NextStatus* - a next status
    * *Roles* - a list of roles, for which a transition is possible

Your app gets an operation identifier **QueueId** and a local Deal identifier **LocalDealId** as a response. 
Your app can track whether an operation is completed either via a periodical poll of operation state 
(see "[Interaction with operation queues](/docs/api/interaction-with-operation-queues.html)") or via an operation 
completion Event (see "[Interaction with events](/docs/api/interaction-with-events.html)") and get a unique platform 
identifier of the Deal **DealId**. **LocalDealId or DealId** can be used to get information about current Deal state, 
to track any change of its state of related events.

### Update a Deal
Your app can update a Deal via `POST /api/deals/{Id}` call with local ID or UPI, sending the following data:
* *Status* - a new Deal status, limited to 32 symbols (can be the same as a current status)
* *Remark* - a remark
* *Parameters* - a list of mutable and immutable Deal parameters, an array of structures **Parameter**:
    * *Key* - a parameter name
    * *Value* - a parameter value
* *Files* - a list of the files attached to the Deal, an array of structures:
    * *Kind* - a file type, limited to 32 symbols
    * *AppRef* - referential information about business application, limited to 32 symbols
    * *Receivers* -  a list of file receivers - a list of **Key** values from a **Parties** list of Deal participants, 
    which should see this file. If a list of receivers is not defined, all Deal participants from **Parties** will receive a file
    * *MediaType* - a preferable file extension
    * *LocalPath* - a local file path in the Node
    * *LocalId* - a file identifier in the Node

> **Attention!** You can complete only one of the fields LocalPath or LocalId depending on the file model exchange 
> within your app and Kekker Platform Adapter 
> (see "[File operations](/docs/api/file-operations.html)").

Your app gets an operation identifier **QueueId** as a response. We recommend to track whether an operation is successful 
either via a periodical poll of operation state (see "[Interaction with operation queues](/docs/api/interaction-with-operation-queues.html)")
 or via an operation completion Event (see "[Interaction with events](/docs/api/interaction-with-events.html)").
* An error operation state blocks consequent operations to update a given Deal in the current Node.
* A suggested Deal update can spread into other nodes of other participants of a Deal.

It is important to find a reason for an error state and either to successfully complete an operation, or delete this 
operation from the queue with all consequent operations related to a current Deal. In the latest case, an  app should 
return its Deal context to a state before an error update operation.

### Obtain information about a Deal
Your app gets information about Deal after `GET /api/deals/{Id}` call with local ID or UPI Id. 
The response will include the following information:
* *DealId* - a unique platform Deal identifier 
* *LocalDealId* - a local Deal identifier
* *Kind* - a Deal type
* *Version* - a version of Deal data - this identifier is incrementally increasing after completion of every Deal operation and can be used as a synchronization key.
* *Parent* - a DealId of a Parent Deal (if exists)
* *AppRef* - referential information of a Business-application Node, which has made a Deal
* *Status* - Deal status
* *Remark* - a remark
* *Parameters* - a list of Deal contextual parameters, an array of structures **Parameter**:
    * *Key* - a parameter name
    * *Value* - a parameter value
* *Parties* - a Deal members list, an array of structures **Party**:
    * *Key* - an identifier of participant
    * *Role* - a participant role
* *Transitions* - a role map of possible transitions, an array of structures **Transition**:
    * *Status* - an initial status
    * *NextStatus* - a next status
    * *Roles* - roles of participants, who can make a transition
* *Files* - a list of files attached to a Deal, an array of structures:
    * *Version* - a value of the field *Version* of the Deal, which a file attachment refers to
    * *Status* - a value of the field *Status* of the Deal, which a file attachment refers to
    * *Kind* - a file type
    * *AppRef* - referential information about Business-application
    * *Receivers* - a file receivers  list 
    * *MediaType* - a desirable file extension
    * *LocalPath* - a local file path in the Node
    * *LocalId* - a file identifier in the Node

    > Attention! Oppositely to the Deal update operation, now you should complete both fields LocalPath and LocalId. 
    > The way you receive a file content depends on a file exchange model between your app and Kekker Platform Adapter 
    > (see [File operations](/docs/api/file-operations.html)").

* *History* - a history of Deal updates, an array of structures **History**:
    * *Version* - a number of a history "step" from a Deal start
    * *Status* - a Deal status
    * *Remark* - a remark
    * *Executor* - an identifier of a participant (*Key*), who has completed a Deal update operation

### Obtain special information about a Deal
You can get special information about a Deal, related to concrete parameters of technical implementation 
in the Kekker Platform via `GET /api/deals/{Id}/tech` call. The response will include the following information:
* Blockchain - an address of a Deal smart contract for Ethereum/Quorum


### Get a list of all Deals
You can get a list of all Deals via `GET /api/deals` call. The response will include "header" information about every 
Deal, an array of structures **DealState**:
* *DealId* - a unique platform Deal identifier 
* *LocalDealId* - a local Deal identifier
* *Kind* - a Deal type
* *Version* - a version of Deal data
* *Status* - a Deal status

You can use a call to periodically check  synchronization of information about Deals in Adapter and your app in case 
of a possible loss of Deal events (see "[Interaction with events](/docs/api/interaction-with-events.html)"). 
You can forcibly request information about Deals, for which a deviation within a Version field was found, 
via `GET /api/deals/{Id}` call. This method requires a lot of resources, so we utterly do not recommend to use 
this method as a main mechanism of tracking Deal updates.