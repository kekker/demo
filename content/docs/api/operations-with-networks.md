---
title: Operations with networks
description: Operations with networks/clusters and members lists fo Kekker Platform
prev: File operations
next: Interaction with operation queues
sandboxPromo: true
---

# Operations with networks/clusters and members lists

> Kekker Platform allows not only to form separate independent members networks, but also to create linked groups of 
networks. 

Kekker's mechanisms allow such multi-cluster networks to work as a unified whole - business operations can 
be performed absolutely clearly for them, and participants of any cluster can interact within the whole group of 
networks. 

Division of networks into clusters can have, for example, a geographical or purely 
technical character - use of basic blockchain platforms in different clusters 
(more detailed information about options of a network cluster structure is available in ...).

Information about a network/cluster is formed by its **Operator**, 
Kekker Platforms' mechanisms allow to spread this information online within clusters, 
underlying a group of networks.

Operations within this group allow Business-application to gain information about every 
cluster, underlying the group of networks, including members list of every cluster. 

> **See API Documentation: [API: Networks Requests](/docs/api/requests-networks.html)**

#### The following operations are included into this group:
* `GET /api/clusters` - obtaining a list of available networks/clusters
* `GET /api/clusters/{ClusterId}` - obtaining information about particular cluster
* `GET /api/clusters/{ClusterId}/clients` - obtaining a member list of particular cluster

#### Reduced forms of calling to relevant operation are available for the current network/cluster:
* `GET /api/cluster`
* `GET /api/clients`

As a result of `GET /api/clusters` request, Business-application gets an array of structures **ClusterTech**, which 
contains the following information about 
every cluster from the group of networks:
* *ClusterId* - a cluster identifier 
* *VersionInfo* - an identifier of version cluster description (can be used for the synchronization of information about cluster between the Business-application and Kekker Adapter)
* *ClientsNumber* - a number of cluster members

As a result of `GET /api/clusters{ClusterId}` request, Business-application gets a **ClusterInfo** structure, which 
contains the following information about cluster:
* *ClusterId*
* *Description* - a short description (for example, "Quorum Kekker Sandbox")
* *TechInfo* - technical characteristics: a type of blockchain, a type of DFS, productivity constraints, etc.
* *Applications* - a list of business-applications in the cluster
* *OperatorInfo* - contacts of an operator
* *ClientsNumber* - a number of cluster members

As a result of `GET /api/clusters/{ClusterId}/clients` request, Business-application gets an array of structure 
**Client**, containing the following information about every participant of the cluster:
* *ClusterId*
* *Key* - a unique identifier of a participant
* *PublicCertificates* - public certificates of participation, used by Kekker Platform
* *Info* - extended information about a participant: a name, requisites, etc. 

The value of a **Key** field is used for identification of the participant during work with business-objects and is 
set by the Operator of the relevant network within the cluster.The value of this field is desirable to be globally 
unique - this will allow to unite any network within the local or global group of networks in the future. 

Taken into account the length of the field - 32 symbols, a standard GUID, 
or a lot of "normal" e-mail, or phone number for a physical person can be used as such 
an identifier. 

> As a reminder, a [Kekker Sandbox](/docs/getting-started/sandbox.html) is a unified group of networks as a part of the following clusters:
> * Private Quorum
> * Private Hyper Ledger
> * Public Ethereum (test-net Rinkeby)
