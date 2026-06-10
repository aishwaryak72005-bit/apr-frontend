function downloadReport(callback) {
  console.log("Downloading report....");
  setTimeout(() => {
    console.log("Report  downloading");
    callback();
  }, 3000);
}

function sendEmail() {
  console.log("Email sent to client");
}
downloadReport(() => {
  sendEmail();
});
