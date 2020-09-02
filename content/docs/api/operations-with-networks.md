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

The Kekker platform allows to form separate independent networks, as well as connected groups of networks (clusters). 
Multi-cluster networks work as a whole in Kekker. Business operations are performed within the clusters as in a unified space. 
Members of any cluster can interact with the whole group of clusters.

Division into clusters can be geographical or purely technical (for example, while using basic blockchain platforms). 

**Sandbox** is a group of clusters:
* Private Quorum
* Private Hyper Ledger Fabrique
* Public Ethereum (test-net Rinkeby)

**Operator** gives information about its network/cluster. Kekker allows to spread it online in a group of clusters.

> **See API Documentation: [API: Networks Requests](/docs/api/requests-networks.html)**

Your app can get information about every cluster of the group via **operations with networks/clusters**, 
including members lists of every cluster:
* `GET /api/clusters` - obtaining a list of available networks/clusters
* `GET /api/clusters/{ClusterId}` - obtaining information about particular cluster
* `GET /api/clusters/{ClusterId}/clients` - obtaining a member list of particular cluster

Reduced API calls can be used for a current network/cluster:
* `GET /api/cluster`
* `GET /api/clients`

`GET /api/clusters` call returns an array of structures **ClusterTech**, containing the following information about 
every cluster of a group of networks:
* *ClusterId* - a cluster identifier 
* *VersionInfo* - an identifier of a cluster description version (can be used to synchronize information between 
Business-application and Kekker Adapter)
* *ClientsCount* - a number of cluster members

`GET /api/clusters{ClusterId}` call returns a structure **ClusterInfo**, containing the following information about cluster:
* *ClusterId*
* *Description* - a short description (for example, "Quorum Kekker Sandbox")
* *TechInfo* - technical characteristics: blockchain type, DFS type, productivity constraints etc.
* *Applications* - a list of business-applications in the cluster
* *OperatorInfo* - contacts of an operator
* *ClientsCount* - a number of cluster members

`GET /api/clusters/{ClusterId}/clients` call returns an array of structures **Client**, containing the following 
information about every cluster member:
* *ClusterId*
* *Key* - a unique identifier of a participant
* *PublicCertificates* - public certificates of participation, used by Kekker Platform
* *Info* - extended information about a participant: a name, requisites, etc. 

A **Key** field is used to identify a participant when working with business-objects. Its value is set by an **Operator**
 of the relevant network in the cluster. This value should be unique within the current and future clusters. 
This will allow to unify any network in the local or global group of networks. 

The field length limit is 32 symbols, so you can use a standard GUID, as well as "real-life" identifiers: 
email or phone number. 