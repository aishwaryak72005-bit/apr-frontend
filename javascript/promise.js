//promise is a javascript object that will resolve or reject
// new keyword is a instance of a class
/*syntax let data = new Promise ((reslove ,reject)=>{
    })*/
const examResult = new Promise((resolve, reject) => {
  const marks = 80;
  if (marks >= 35) {
    resolve("Pass");
  } else {
    reject("Fail");
  }
});

examResult
  .then((result) => {
    console.log("success", result);
  })
  .catch((error) => {
    console.log("Failure", error);
  });
