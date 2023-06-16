import mqtt from "mqtt";

import {
  device_topic,
  device_temperature_topic,
  publish_device,
  publish_device_temperature,
} from "./device.js";

const client = mqtt.connect("mqtt://localhost:1883");

function initialize_mqtt() {
  client.on("connect", function () {
    client.subscribe(device_topic, function (err) {
      if (!err) {
        setInterval(() => publish_device(client), 1000);
      }
    });
    client.subscribe(device_temperature_topic, function (err) {
      if (!err) {
        setInterval(() => publish_device_temperature(client), 1000);
      }
    });
  });

  client.on("message", function (topic, message) {
    console.log(message.toString());
  });
}

export { initialize_mqtt };
