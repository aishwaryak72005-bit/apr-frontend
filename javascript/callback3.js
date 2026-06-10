function orderfood(callback) {
  console.log("Order Placed");
  setTimeout(() => {
    callback();
  }, 5000);
}

function prepareFood(callback) {
  console.log("Food is being prepared");
  setTimeout(() => {
    callback();
  }, 3000);
}
function findDeliveryPartner(callback) {
  console.log("Finding the delivery Partner");
  setTimeout(() => {
    callback();
  }, 2000);
}
function outForDelivery(callback) {
  console.log("oder is out for delivery");
  setTimeout(() => {
    callback();note
  }, 1000);
}
function foodDelivery() {
  console.log("Food Delivered Succesfully");
}
orderfood(() => {
  prepareFood(() => {
    findDeliveryPartner(() => {
      outForDelivery(() => {
        foodDelivery(() => {});
      });
    });
  });
});
