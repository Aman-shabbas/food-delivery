const secondsElapsedFrom = (referenceTime) => {
  return (Math.floor(Date.now() / 10) - referenceTime * 100) / 100;
};

const printOrderDetails = (orderDetails, status) => {
  const secondsTakenInString = secondsElapsedFrom(orderDetails.placedTime);
  const detailsString = JSON.stringify(orderDetails);
  console.log(
    `[${secondsTakenInString.toFixed(2)}s] ${status}:${detailsString}`
  );
};

function printStatus(orderDetails) {
  const timeTakenForPreparingOrder = secondsElapsedFrom(
    orderDetails.placedTime
  ).toFixed(2);
  console.log(`[${timeTakenForPreparingOrder}s] Preparing order`);
}

export const takeOrder = () => {
  const placedTime = Math.floor(Date.now() / 10) / 100;
  const orderDetails = { orderId: 123, placedTime };
  printOrderDetails(orderDetails, "Order recieved");

  prepareOrder(orderDetails);
};

const prepareOrder = (orderDetails) => {
  printStatus(orderDetails);

  setTimeout(() => {
    orderDetails.foodDetails = "Burger & Fries";

    printOrderDetails(orderDetails, "Food is ready..");

    packOrder(orderDetails);
  }, 3 * 1000);
};

const packOrder = (orderDetails) => {
  printStatus(orderDetails);

  setTimeout(() => {
    orderDetails.packageDetails = "Packed in eco-friendly box";
    printOrderDetails(orderDetails, "Order packed");

    deliver(orderDetails);
  }, 2 * 1000);
};

const deliver = (orderDetails) => {
  printStatus(orderDetails);

  setTimeout(() => {
    orderDetails.deliveryDetails = "Delivered by John at 7:30 PM";
    printOrderDetails(orderDetails, "Order delivered");
  }, 5 * 1000);
};
