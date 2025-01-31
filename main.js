import { takeOrder } from "./src/delivery_lib.js";

const main = () => {
  const startTime = Date.now();

  const orderDetails = takeOrder(startTime);
};

main();
