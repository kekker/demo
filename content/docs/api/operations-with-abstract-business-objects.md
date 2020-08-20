---
title: Operations with abstract business objects
description: Operations with abstract business objects for Kekker Platform
prev: Interaction with Operation queues
next: Authorization
sandboxPromo: true
---

# Operations with abstract business objects

## Operations with Abstract deal

Kekker API provides the following operations with business-object "Abstract deal":
* `GET /api/deals/templates` - obtaining a list of available deal templates
* `POST /api/deals` - creature of a Deal
* `POST /api/deals/{Id}` - update of a Deal
* `GET /api/deals` - obtaining a Deals list
* `GET /api/deals/{Id}` - obtaining information about concrete Deal state
* `GET /api/deals/{Id}/tech` - obtaining information about Deal technical characteristics


> Business-application has to obtain a list of available Deal templates before the creature of any Deal - make 
> a request `GET /api/deals/templates` and obtain templates description as an array of structures **DealTemplate**:
> * *Kind* - Deal type
> * *Description* - template description
> * *Transitions* - a role map of possible transitions, carried inside a template, array of structures **Transition**:
>   * *Status* - an initial status
>   * *NextStatus* - a next status
>   * *Roles* - a list of roles, for which a transition is possible

In addition, it is supposed that a Business-application will request for a members list within its network and 
clusters of a group of networks related  to it - see "[Operations with networks/clusters and members lists](/docs/api/operations-with-networks.html)".

### Create a Deal
To create a Deal, a Business-application has to complete a `POST /api/deals operation`, sending the following dataset:
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

As a response, a Business-application gets an operation identifier **QueueId** and a local Deal identifier **LocalDealId**. 
An application can track a completion of the creation operation by means of either a periodic survey of 
an operation state (see "[Interaction with operation queues](/docs/api/interaction-with-operation-queues.html)"), 
or by means of an operation completion event (see "[Interaction with events](/docs/api/interaction-with-events.html)")
and get a unique platform deal identifier **DealId**. **LocalDealId** or **DealId** can be 
used to obtain information about a current Deal state and updates of its state, and to track its events.

### Update a Deal
To update a Deal, defined by the local or unique Platform identifier **Id**, a Business-application has to 
implement an operation `POST /api/deals/{Id}`, sending the data:
* *Status* - a new Deal status, limited to 30 symbols (new status can be the same as the current one)
* *Remark* - a remark
* *Parameters* - a list of inserted and mutable Deal parameters, an array of structures **Parameter**:
    * *Key* - a parameter name
    * *Value* - a parameter value
* *Files* - a list of the files attached to the Deal, an array of structures:
    * *Kind* - a file type, limited to 32 symbols
    * *AppRef* - referential information of Business-application, limited to 32 symbols
    * *Receivers* - a list of file receivers - a list of Key field values from the list Parties for Deal members, who have to see this file; the file will be received by all Deal members from Parties, if the list of receivers is not defined
    * *MediaType* - a desirable file extension
    * *LocalPath* - a local file path in the Node
    * *LocalId* - a file identifier in the Node

> **Attention!** Only one of the fields LocalPath or LocalId should be completed depending on the file exchange model 
> between the Business-application and Kekker Platform Adapter (see "[File operations](/docs/api/file-operations.html)").

As a response, a Business-application gets an operation identifier **QueuId**. *It is desirable*, that the 
Business-application tracks a successful completion of an update operation either by means of a periodical survey 
about operation state (see "[Interaction with operations queues](/docs/api/interaction-with-operation-queues.html)"), 
or by means of an operation completion event (see "[Interaction with events](/docs/api/interaction-with-events.html)"), because:
* A wrong operation state will lead to a block of consequent operations on updation of this Deal in the current Node
* A supposed updation of the Deal can ignore the other Nodes of other Deal members

That is why a wrong operation state has to be inspected properly, and an operation either should be completed 
successfully, or deleted from a queue with all consequent linked operations on the current Deal. 

In the latter case, the Business-application has to correct its Deal context to get back a last state, preceding 
the initialization of the wrong update operation.

### Obtain information about a Deal
To obtain information about a Deal, defined with the local or unique platform identifiers **Id**, the 
Business-application should make a request `GET /api/deals/{Id}`, and a response will include the following information:
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

    > **Attention!** In contrast to the Deal update operation, both *LocalPath* and *LocalId* fields will be completed 
    > in the current case. 
    >
    > The way to obtain a file content is defined depending on a file exchange model between 
    > the Business-application and Kekker Platform Adapter (see "[File operations](/docs/api/file-operations.html)").

* *History* - a history of Deal updates, an array of structures **History**:
    * *Version* - a number of a history "step" from a Deal start
    * *Status* - a Deal status
    * *Remark* - a remark
    * *Executor* - an identifier of a participant (*Key*), who has completed a Deal update operation

### Obtain special information about a Deal
To obtain special information about Deal, related to concrete parameters of  technical implementation in 
the Kekker Platform, a `GET /api/deals/{Id}/tech` request can be used - a response can include the following information:
* *BlockchainId* - a Deal smart-contract address for the  Ethereum/Quorum

### Get a list of all Deals
To get a list of all Deals, a Business-application can make a request `GET /api/deals`. A response will include 
"header" information about every Deal, an array of structures **DealState**:
* *DealId* - a unique platform Deal identifier 
* *LocalDealId* - a local Deal identifier
* *Kind* - a Deal type
* *Version* - a version of Deal data
* *Status* - a Deal status

This information can be used for periodical check of synchronization of information about Deals in the Adapter and 
Business-application in case of possible loss of events about Deals (see "[Interaction with events](/docs/api/interaction-with-events.html)"). 

In this case information about Deals, for which a deviation related to a **Version** field was found, is compulsory requested with 
a method `GET /api/deals/{Id}`. Due to a high resource intensity of this method, it is *strongly recommended not to use* 
it as a main mechanism of tracking Deal updates. 
