## steps

- write a function for taking order.

  - ~~should record the time when executing..~~
  - ~~should console order ready along with order id~~
  - ~~time when the execution is completed is passed to next~~
  - ~~should console preparing food...~~
  - ~~call prepareOrder function~~

- write a function for preparing order, which should be passed to setTimeOut

  - ~~recieve the time taken for execution for previous function~~
  - ~~wait for 3 sesconds~~
  - ~~calculate the time taken for the execution of the funciton~~
  - ~~should console 'food is ready' a long with food details~~
  - ~~should call packOrder function~~

- write a function for packing order

  - ~~should console packing food ...~~
  - ~~recieve the time last function is ececuted~~
  - ~~wait for 2 seconds~~
  - ~~should console 'order packed...' along with orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box'~~
  - ~~should console 'delicering order'~~
  - should call the deliver function

- write a function for delivering order
  - recieve the time when pack order copleted its execution
  - wait for 5 seconds
  - calculate time difference to current time.
  - console 'food is delivered' with { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box', deliveryDetails: 'Delivered by John at 7:30 PM' }
