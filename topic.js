/**
 * The file is going to create a topic name Users with 2 partitions.
 *
 * To use by command:
 *
 * node topic.js
 */

const { Kafka } = require("kafkajs");
const config = require("config");

run();

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: config.get("brokers"),
    });

    const admin = kafka.admin();
    console.log("Connecting...");
    await admin.connect();
    console.log("Connected!");
    // A-M, N-Z
    await admin.createTopics({
      topics: [
        {
          topic: "Users",
          numPartitions: 2,
        },
      ],
    });
    console.log("Created Successfully!");
    await admin.disconnect();
  } catch (ex) {
    console.error(`Something bas happened ${ex}`);
  } finally {
    process.exit(0);
  }
}
