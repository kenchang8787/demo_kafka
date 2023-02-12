# DEMO Kafka

## Overview

This demo implement the characters of producer and consumer in Kafka by Node.js.

## Requires

* Docker
* Node.js
* IDE (VSCode)

## Commands

Before execute command, make sure your docker is running.

### Spin up ZooKeeper

This command will download **ZooKeeper** image run in docker on the port.**2181** 

<pre>
docker run --name zookeeper  -p 2181:2181 -d zookeeper
</pre>

### Spin up Kafka

This command will download **Kafka** image and run in docker on the port **9092**, be aware of the parameter **COMPUTER_NAME**.

<pre>
docker run -p 9092:9092 --name kafka -e KAFKA_ZOOKEEPER_CONNECT=COMPUTER_NAME:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://COMPUTER_NAME:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka
</pre>

### Stop & Remove

This command is for if you ever mess up or you want to start fresh just stop and remove the containers.

<pre>
docker stop zookeeper kafka
docker rm zookeeper kafka
</pre>

## About Kafka

*Apache Kafka is an open-source, distributed, and scalable event streaming platform. It was originally developed by LinkedIn and later donated to the Apache Software Foundation.*

Kafka is used for building real-time data pipelines and streaming applications. It can handle high volume, high velocity, and high variety data and provide a publish-subscribe mechanism for applications to exchange data. It is commonly used for:

1. Log aggregation: collecting, storing, and processing log data from multiple sources.

2. Real-time data streaming: processing real-time data from various sources, such as sensors, logs, or social media feeds.

3. Messaging: delivering messages from one application to another in a reliable and scalable way.

4. Metrics and Monitoring: collecting, storing, and analyzing large amounts of operational data for monitoring and alerting purposes.

Kafka is designed for high reliability, with data replication and automatic failover. It is also designed for high performance, with the ability to handle millions of events per second. It supports various programming languages, including Java, Scala, Python, and more, making it easy to integrate with different systems.

## Refferences
To be aware of, all this demo is refferences from a youtuber *HusseinNasser*,
I just implemented it as a practice.


[Github](https://github.com/hnasr/javascript_playground/tree/master/kafka)
<br/>
[Youtube](https://www.youtube.com/watch?v=R873BlNVUB4&ab_channel=HusseinNasser)