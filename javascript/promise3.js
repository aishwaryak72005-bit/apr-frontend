function orderFood() {
  return new Promise((resolve) => {
    //console.log("🧺order Placed");
    setTimeout(() => {
      resolve("🧺order Placed");
    }, 5000);
  });
}
function prepareFood() {
  return new Promise((reslove, reject) => {
    console.log("👩‍🍳Food is being prepared");
    setTimeout(() => {
      reject("food got damaged");
    }, 3000);
  });
}

function findDeliveryPartner() {
  return new Promise((resolve) => {
    console.log("🛵Finding delivery Partner");
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
function outForDelivery() {
  return new Promise((resolve) => {
    console.log("🚚Order is out for delivery ");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
function foodDelivery() {
  return new Promise((resolve) => {
    console.log("🛖Food Deliverd Successfully");
    resolve();
  });
}
orderFood()
  .then((message) => {
    console.log(message);
    return prepareFood();
  })
  .then(() => findDeliveryPartner())
  .then(() => outForDelivery())
  .then(() => {
    console.log("order complted");
  })
  .catch((error) => {
    console.log("❌ something went wrong:", error);
  });
