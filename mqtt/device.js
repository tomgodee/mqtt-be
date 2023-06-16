const device_id = "6f9ea7c7-6297-4283-b72d-7d673d3473fd";
const device_topic = "/device/6f9ea7c7-6297-4283-b72d-7d673d3473fd";

const publish_device = (client) => {
  client.publish(
    device_topic,
    JSON.stringify({
      device_id,
      device_name: "Tank",
      status: Math.random() < 0.5,
    })
  );
};

const device_temperature_topic =
  "/device/6f9ea7c7-6297-4283-b72d-7d673d3473fd/Temperature";

const publish_device_temperature = (client) => {
  client.publish(
    device_temperature_topic,
    JSON.stringify({
      device_id,
      sensor_name: "Temperature",
      value: Math.floor(Math.random() * 101),
      unit: "°C",
    })
  );
};

export {
  device_topic,
  device_temperature_topic,
  publish_device,
  publish_device_temperature,
};
