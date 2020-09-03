---
title: Interaction with Operation queues 
description: Interaction with Operation queues for Kekker Platform
prev: Operations with networks
next: Interaction with events
sandboxPromo: true
---

# Interaction with Operation queues 

Your app uses operations from "[Operations with abstract business-objects](/docs/api/operations-with-abstract-business-objects.html)"
to work with Kekker's abstract business objects.

Such operations get into an inner queue of the Kekker Adapter. Usually (unless it is specified in the description of 
the relevant business-object) operations  with the concrete instance of the business object are implemented in 
the FIFO order (according to the order in the queue). 

In case of an error, all consequent operations with the given instance of a business object are stopped until 
an error is corrected or a wrong operation is deleted from the queue. 

> **See API documentation: [API: Queue Requests](/docs/api/requests-queues.html)** 

Your app gets an **Operation identifier in the queue - QueueId** - after calling an API-operation in order to create/update 
business objects. The following operations with a queue gets available after this business-operation:
* `GET /api/queue/{QueueId}` -  to obtain information about queue state
* `DELETE /api/queue/{QueueId}` - to delete an operation from the queue

`GET /api/queue/{QueueId}` call returns a structure **QueueState** with the following information about business operation:
* *QueueId*
* *Status* - operation status - one of the values: InQueue, InProgress, Success, Error
* *Error* - an extended error description (only for Error status)

Success status includes the following fields depending on a type of abstract business object and operations with it:
* Creature of **Deal** - a UPI of the created object *DealId* and its local identifier *LocalDealId*

`DELETE /api/queue/{QueueId}` call deletes a wrong operation from the queue, as well as the consequent operations and 
such operations, that guarantee its successful implication. 
It is important to consider:
* Only business operations with *InQueue* or *Error* status can be deleted from a queue
* Firstly you should delete business-operations with *InQueue* status from the queue, and only after that you can delete 
a wrong operation with an *Error* status. Oppositely, the queue will be unlocked after a wrong operation is deleted, 
and consequent operation can start undesirably.
