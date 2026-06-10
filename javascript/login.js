//without closure
let password = "admin123";
function login(userPassword) {
  if (userPassword === password) {
    console.log("login successfull");
  } else {
    console.log("Invalid Password");
  }
}
password = "hacked"; //any one can change it
login("admin123");

//example two
function createLoginSystem() {
  let password = "admin123"; //local scope
  let login = function (userPassword) {
    if (userPassword === password) {
      console.log("Login successful");
    } else {
      console.log("Invalid Password");
    }
  };

  let changePassword = function (oldPassword, newPassword) {
    if (oldPassword === password) {
      password = newPassword;
      console.log("Password Update");
    } else {
      console.log("Wrong old password");
    }
  };
  return { login, changePassword };
}
const auth = createLoginSystem();
auth.login("admin123"); //login Successful
auth.changePassword("admin123", "react123"); //login successfull
auth.login("admin123"); //Invalid Password
auth.login("react123"); // Login Successful
//direct accesss is not possible
console.log(auth.password);
