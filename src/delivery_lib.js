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
  }, 3 * 1000);
};