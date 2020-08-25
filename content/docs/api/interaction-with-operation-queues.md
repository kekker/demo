---
title: Interaction with Operation queues 
description: Interaction with Operation queues for Kekker Platform
prev: Operations with networks
next: Interaction with events
sandboxPromo: true
---

# Interaction with Operation queues 

To implement necessary business processes, Business-application uses a set of abstract business-objects of the Kekker 
Platform, described in "[Operations with abstract business-objects](/docs/api/operations-with-abstract-business-objects.html)". 

To create and change business-objects, Business-platform uses operations, described in ...
. 

Operations with business-objects are located in the inner queue of the Kekker Adapter. Usually (unless it is specified 
in the description of the existing business-object) operations, related to the concrete business-object instance, 
are implemented in accordance with the queue. 

In case of an implementation error, an implementation of all consequent operations, related to the current 
business-object instance, will be interrupted  until the error correction or deletion of the wrong operation 
from the queue are performed. 

> **See API documentation: [API: Queue Requests](/docs/api/requests-queues.html)** 


**Operation identifier in the queue - QueueId.** Business-application gets **QueueId** 
in response to an API-operation call during the creation/updating of the business-object. 
After that, the following operations with the queue gets available in relation 
to the current business-operation. 
* `GET /api/queue/{QueueId}` - obtaining information about the operation state
* `DELETE /api/queue/{QueueId}` - deletion of operation from the queue

As a result of `GET /api/queue/{QueueId}` request, Business-application gets a 
**QueueState** structure, containing the following information about business operation: 
* *QueueId*
* *Status* - operation status - one of the values: InQueue, InProgress, Success, Error
* *Error* - an extended error description (only for Error status)

The following fields are included into the structure **QueueState** for Success
status depending on the type of the abstract business-object and operation on it:

* To create object **Deal** - a unique platform identifier of the created object *DealId*
and its local identifier *LocalDealId*

Operation `DELETE /api/queue/{QueueId}` can be used by Business-application to delete 
a wrong operation from a queue, as well as the consequent operations, 
implying its successful implementation. Besides, it is necessary to consider the following 
important points:
* Only business operations with statuses *InQueue* or *Error* can be deleted from a queue
* Firstly, it is necessary to delete business operations with the status *InQueue* from a queue, 
and only after that it is possible to delete a wrong operation with the *Error* status. 
Otherwise, a queue can be unlocked, and an undesirable implementation of the consequent 
operation can start. 
