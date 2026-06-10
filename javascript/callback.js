//callback is a function passed as an argument to another function and it is excuted later or excuted after current function is finished
function completeTask(taskName, callback) {
  console.log(`Working on ${taskName}....`);
  console.log(`${taskName} completed`);
  callback();
}
function notifyManager() {
  console.log("Email sent to Project Manager");
}
completeTask("React DashBoard Development", notifyManager);
