const getTimeTakenInSeconds = (startTime) => {
  const totalTimeTaken = Math.floor((startTime - Date.now()) / 1000);
  const timeTakenInSeconds = (totalTimeTaken / 10).toFixed(2);
  return timeTakenInSeconds;
};

const takeOrder = () => {
  const startTime = Date.now();
  const orderDetails = { orderId: 123 };
  const timeTakenInSeconds = getTimeTakenInSeconds(startTime);
  console.log(
    `[${timeTakenInSeconds}s]Order recieved:${JSON.stringify(orderDetails)}`
  );
  console.log(`[${timeTakenInSeconds}s]Preparing order`);

  return orderDetails;
};



takeOrder();
