---
title: Interaction with events
description: Interaction with events for Kekker Platform
prev: Interaction with Operation queues 
next: Operations with abstract business objects
sandboxPromo: true
---

# Interaction with events

Events system is a main informational source about a current participant's node, and a network in general for your app. 
API-operations are implemented with an *Event* structure, which includes:
* **EventId** - an event identifier
* **Category** - an event category
* **Event** - an event type
* **ObjectId** - an event object identifier
* **LocalObjectId** - a local event object identifier (for business-objects)
* **Timestamp**
* Additional context fields depending on the event category and type

There are several event categories:
* **System** - events, related  to participant's node or network in general
* **Clients** - events, related to a members lists of the current networks, as well as related clusters of a group 
of networks (see "[Operations with networks/clusters and members lists](/docs/api/operations-with-networks.html)")
* **Queue** - events related to successful or wrong completion  of business-operations (see 
"[Interaction with operation queues](/docs/api/interaction-with-operation-queues.html)")
* Events related to the emergence of new **business-objects** or updating of existing business-objects - each 
category refers to its self-titled business-object. For example, *Deals* are events, related to the business-objects 
of type *Abstract deal*

> **See API documentation: [API: Events Requests](/docs/api/requests-events.html)**

Kekker API suggests the following operations:
* `GET /api/events` -  a request for a general list of not-processed events. It returns an array of *Event* structures.
* `GET /api/events/{Category}` - a request for a list of not-processed events within a given category. 
It returns an array of *Event* structures.
* `POST /api/events/{eventUid}/ack` -  to approve event processing. As a result, an event with defined **eventId** will be 
excluded from a list of not-processed events. Your app will get a timestamp of the earliest event from not-processed 
events as a response. If your app records this timestamp (i.e. in its database), it can again process events, 
occurred in the emergency interval, with `/api/events/reset/{DateTimeUTC}` in case of an emergency exit.
* `POST /api/events/reset/<DateTimeUTC>` - is used to reinitialize a not-processed events list by a moment **DateTimeUTC**. 
As a result of a call, all events with timestamp equal or larger than **DateTimeUTC** will be marked as not-processed.

## Other Filling variants

Examples of parameters used for GET /api/events/<Category> call depending on different categories:

#### Update of a system node configuration:
* *Category =* System
* *Event =* SystemConfigurationUpdated

#### Update of a members list of a network/cluster:
* *Category =* Clients
* *Event =* ClientsListUpdated
* *ObjectId =* ClusterId
* *Source =* THIS (for the current network) | EXTERNAL (for the other network)

#### Successful completion of a business-operation in the queue:
* *Category =* Queue
* *Event =* SuccessQueueEvent
* *ObjectId =* QueueId
* In accordance with the context fields of the structure **QueueState**

#### Errors during a business-operation in the Queue:
* *Category =* Queue
* *Event =* ErrorQueueEvent
* *ObjectId =* QueueId
* *Error =* Error description

#### To add/update a business-object of “Abstract deal” type:
* *Category =* Deals
* *Event =* DealsCreated | DealsUpdated
* *ObjectId =* DealId
* *LocalObjectId =* LocalDealId

It is suggested, that you can use the following basic cycle algorithm when you work with your app events:
* Initialization - to set a start point of not-processed events (once when launching an app)
* Request for a list of not-processed events
* Events processing
* Exclusion of processed events from a list of not-processed events

