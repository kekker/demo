---
title: Main Concepts
description: Get Familiar with Kekker identities and workflow
next: Sandbox
prev: Get Started
---

# Main Concepts


## Deal: a general transaction 

We use an abstraction called *Deal* to pass information between parties. For any given business scenario you set the Deal participants, roles, scenario steps and step-by-step transition map. We then apply universal rules to translate the Deal into DLT operations, pass it to the recipient and represent back in a structured Deal logic on a recipient’s side. 

A Deal is simple but smart. It can cover a wide range of scenarios from pure document exchange between companies to multistage contract execution. In some cases you may want to use a combination of Deals for your process, e.g. if a scenario is complex and multilayered or contains stages with markedly different sets of parties involved.

A Deal is literally an underlying operation abstraction which facilitates any given transaction. It is a distributed container that provides a combination of the following components:
* Transaction attributes (transaction type and its attributes, status)
* Role list of transaction participants
* A list of necessary files for the transaction with optional restricted access to desired participants
* Role map of transaction status changes
* Algorithms for processing transaction status changes

Basic operational abstraction is what developers of specific services hosted on the Platform operate on. Since the versatility, flexibility, and functional completeness of this abstraction largely determines the speed and efficiency of developing appropriate services, which in turn allows developers to speed up the process of providing new and more attractive services to end users.

## Transport function

The objective of the Platform, as a transport system, is the reliable delivery of the transaction and all its changes between the transaction participants based on the following conditions:
* Completeness and integrity of information
* Confidentiality both outside the Deal’s participants and, if necessary, among them (optional limited access to desired participants)
* Following the role map of transaction status changes
* Providing a mechanism of automatic arbitration procedures to bring the state of the transaction to the agreed upon state by participants in case of force majeure
* Providing mechanisms of legal relevance, including cross-border transactions
