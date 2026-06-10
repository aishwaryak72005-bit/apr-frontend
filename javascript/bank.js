function createBankAccount() {
  let balance = 1000;
  let deposit = function (amount) {
    balance = balance += amount;
    console.log(`Balance: ${balance}`);
  };
  let withdraw = function (amount) {
    balance -= amount;
    console.log(`Balance: ${balance}`);
  };
  return { deposit, withdraw };
}
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
//console.log(account.balance);
