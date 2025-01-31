const getTimeTakenInSeconds = (startTime) => {
  const totalTimeTaken = Math.floor((Date.now() - startTime) / 100);
  const timeTakenInSeconds = (totalTimeTaken / 10).toFixed(2);
  return timeTakenInSeconds;
};

export const takeOrder = (startTime) => {
  const orderDetails = { orderId: 123 };
  const timeTakenForTakingOrder = getTimeTakenInSeconds(startTime);
  console.log(
    `[${timeTakenForTakingOrder}s]Order recieved:${JSON.stringify(
      orderDetails
    )}`
  );

  prepareOrder(startTime, orderDetails);
};

const prepareOrder = (startTime, orderDetails) => {
  const timeTakenForPreparingOrder = getTimeTakenInSeconds(startTime);
  console.log(`[${timeTakenForPreparingOrder}s]Preparing order`);

  setTimeout(() => {
    orderDetails.foodDetails = "Burger & Fries";
    const timeTakenForCompletePreparation = getTimeTakenInSeconds(startTime);
    console.log(
      `[${timeTakenForCompletePreparation}s] Food is ready ${JSON.stringify(
        orderDetails
      )}`
    );

    packOrder(startTime, orderDetails);
  }, 3 * 1000);
};

const packOrder = (startTime, orderDetails) => {
  const packingStartTime = getTimeTakenInSeconds(startTime);
  console.log(`[${packingStartTime}s] Packing food..`);

  setTimeout(() => {
    orderDetails.packageDetails = "Packed in eco-friendly box";
    const packingEndTime = getTimeTakenInSeconds(startTime);
    console.log(
      `[${packingEndTime}s] order packed.. ${JSON.stringify(orderDetails)}`
    );
  }, 2 * 1000);
};
