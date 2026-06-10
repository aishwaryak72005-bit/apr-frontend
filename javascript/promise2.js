function withdeawMoney(value) {
  return new Promise((reslove, reject) => {
    const balance = 5000;
    const amount = value;
    if (balance >= amount) {
      reslove("💵 cash withdraw successfull");
    } else {
      reject("❌Inssufficient Balance");
    }
  });
}
withdeawMoney(1000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
