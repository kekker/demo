---
title: Interaction with events
description: Interaction with events for Kekker Platform
prev: Interaction with Operation queues 
next: Operations with abstract business objects
sandboxPromo: true
---

# Interaction with events

The event system is a main source of information about what's happening in the node of the participant, as well 
as in the network in general. All the diversity of the processed events can be divided into the following categories:
* **System** - events, related  to participant's node or network in general
* **Clients** - events, related to a members lists of the current networks, as well as related clusters of a group 
of networks (see "[Operations with networks/clusters and members lists](/docs/api/operations-with-networks.html)")
* **Queue** - events related to successful or wrong completion  of business-operations (see 
"[Interaction with operation queues](/docs/api/interaction-with-operation-queues.html)")
* Events related to the emergence of new **business-objects** or updating of existing business-objects - each 
category refers to its self-titled business-object. For example, *Deals* are events, related to the business-objects 
of type *Abstract deal*

It is supposed, that Business-application will use the following basic cycle algorithm during the interaction with events:
* Initialization - setting of the start point  of not-processed events (once during the launch of the Business-application) 
* Request for a list of not-processed events 
* Events processing
* Exclusion of processed events from a list of not-processed ones

> **See API documentation: [API: Events Requests](/docs/api/requests-events.html)**

Kekker proposes the following operation to implement this API’s functionality:
* `GET /api/events` - request for a general list of not-processed events
* `GET /api/events/{Category}` - request for a list of not-processed events within the concrete category
* `POST /api/events/{eventUid}/ack` - confirmation of the event processing
* `POST /api/events/reset/<DateTimeUTC>` - reinitialization of a list of not-processed events by the moment *DateTimeUTC*

As a result of `GET /api/events` or `GET /api/events/<Category>` requests, Business-application gets an **Event** 
structure, containing the following information about every event:
* *EventUid* - an event identifier
* *Category* - an event category
* *Event* - an event type
* *ObjectId* - an event object identifier
* *LocalObjectId* -a  local object identifier - for business-objects
* *Timestamp*
* Extra context fields depending on the category and type of the event

## Other Filling variants

In addition to concrete categories, the following variants of the filling are available.

#### Update of a node system configuration:
* *Category =* System
* *Event =* SystemConfigurationUpdated

#### Update of the members list of network/cluster:
* *Category =* Clients
* *Event =* ClientsListUpdated
* *ObjectId =* ClusterId
* *Source =* THIS (for the current network) | EXTERNAL (for other network)

#### Successful completion of the business-operations in the queue:
* *Category =* Queue
* *Event =* SuccessQueueEvent
* *ObjectId =* QueueId
* In accordance with the context fields of the structure **QueueState**

#### Error during the implementation of a business-operation in a queue:
* *Category =* Queue
* *Event =* ErrorQueueEvent
* *ObjectId =* QueueId
* *Error =* Error description

#### Addition/update of the business-object of a type "Abstract deal":
* *Category =* Deals
* *Event =* DealsCreated | DealsUpdated
* *ObjectId =* DealId
* *LocalObjectId =* LocalDealId

As a result of `POST /api/events/{eventUid}/ack` operation, the event with a signed identifier will be excluded 
from a list of not-processed events, and Business-application will get a timestamp as a response from the earliest 
of the not-processed events. 

Why do we need so? Having fixed the timestamp as a current border of not-processed 
events, for example, in its database, Business-application will be able to initialize repeated processing 
of the events, located in the "window of emergency loss", in case of emergency exit with `POST /api/events/reset/{DateTimeUTC}`. 

A result of `POST /api/events/{eventUid}/ack` operation, all events with a timestamp greater or equal of a 
signed one, will be marked as not-processed and can be repeatedly displayed after the requests 
`GET /api/events` or `GET /api/events/{Category}`.
