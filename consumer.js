/**
 * The file is going to create a consumer and keep listening to kafka.
 *
 * To use by command:
 * node comsumer.js
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

    const consumer = kafka.consumer({ groupId: "test" });
    console.log("Connecting...");
    await consumer.connect();
    console.log("Connected!");

    consumer.subscribe({
      topic: "Users",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `Receive Msg [${result.message.value}] on partition [${result.partition}]`
        );
      },
    });
  } catch (ex) {
    console.error(`Something bas happened ${ex}`);
  }
}
