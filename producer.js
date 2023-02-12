/**
 * The file is going to create a producer that can send topic in to our kafka.
 *
 * To use by command:
 * node producer.js Fiona
 * node producer.js Woody
 * node producer.js Ali
 * node producer.js Elan
 * node producer.js George
 */

const { Kafka } = require("kafkajs");
const config = require("config");

const msg = process.argv[2];

run();

async function run() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: config.get("brokers"),
    });

    const producer = kafka.producer();
    console.log("Connecting...");
    await producer.connect();
    console.log("Connected!");
    // A-M:0, N-Z:1
    const partition = msg[0] < "N" ? 0 : 1;
    const result = await producer.send({
      topic: "Users",
      messages: [
        {
          value: msg,
          partition: partition,
        },
      ],
    });
    console.log(`Send Successfully! ${JSON.stringify(result)}`);
    await producer.disconnect();
  } catch (ex) {
    console.error(`Something bas happened ${ex}`);
  } finally {
    process.exit(0);
  }
}
