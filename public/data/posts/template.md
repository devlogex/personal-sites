---
title: "Why data system is more important than application ?"
date: "2024-08-03"
author: "Tan Nguyen"
tags: ["Problem-resolve", "Data-system"]
---

### Context

To answer this question, we need to clarify what a data system is.

A data system can be understood simply as something that stores data. It’s not limited to relational databases like PostgreSQL or MySQL. It can also be a disk for storing files, a Redis server for cached data, or a stream processing system like Kafka for storing and transmitting messages. There are many types of data systems, but they share similar characteristics: handling write requests to store data and read requests to return stored data.

Some might argue that the data system is part of the application. This perspective isn't entirely wrong or right; it depends on how you define an application. However, for our discussion, we will technically separate the application layer from the data system.

### What is an Application Compared to a Data System?

We will refer to the "application layer" as the part that implements business logic. For example, consider a bill management application used in a coffee house. When a customer orders a tea, the business logic involves creating a new bill with the tea item, displaying the item's price, and calculating the bill's total amount.
In this scenario:
- The data system stores the list of available items, their prices, and the generated bills.
- The application layer interacts with the data system to:
  - Request the list of available items to serve the customer.
  - Calculate the total amount of the bill based on the selected items.
  - Store the generated bill.

You can see that the business logic runs on the application layer, while the data system handles storing and retrieving data. So, why is the data system more important than the application layer from a technical perspective?

### Reasons Why the Data System is More Important

Firstly, data systems are the backbone for storing and providing data to the application layer.
- Performance Dependency: With advancements in CPU and memory, the application layer can process data quickly. However, the overall performance is still heavily dependent on how efficiently the data system can store and retrieve data.
- Scalability Complexity: Scaling applications is relatively straightforward due to modular code and modern orchestration tools (like Kubernetes). However, scaling data systems involves more complexity because of issues like data sharding, replication, and maintaining consistency across distributed systems.
- Cost of Scaling: The cost of scaling a data system is often significantly higher than scaling the application layer. This is due to the need for high-performance storage solutions, network bandwidth for data replication, and complex management of distributed databases.

Secondly, data system issues can have severe repercussions.
- Application Layer Troubleshooting: When the application layer encounters issues, they can often be quickly resolved through code rollbacks, redeployments, or horizontal scaling. These solutions are relatively quick and cause minimal disruption.
- Data System Failures: If a data system encounters problems, such as data corruption, loss, or unavailability, the impact is much more severe. It can halt business operations entirely, leading to potential data loss and significant downtime.
- Criticality of Data Integrity: Data integrity is paramount. Any compromise in data can lead to inaccurate information, affecting business decisions, customer trust, and compliance with regulations. Recovering from data system issues often requires complex and time-consuming processes, such as data restoration from backups or extensive troubleshooting to resolve replication issues.

### What should we do to guarantee data system work well in our system ?
This is a big question, will answer next time.