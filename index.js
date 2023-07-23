
const path = require("path");
const express = require("express");
const fs = require("fs");

//Setting a directory path
const dirPath = path.join(__dirname, "timestamp");
// console.log("dirpath", dirPath);
const app = express();

app.get("/", async(req, res) => {
  const time = new Date();
  //creating Timestamp
  console.log(time)
  let dateString = time.toUTCString().slice(0, -3);
  //converting Timestamp to UTC format
  console.log(dateString);
  const timeStamp = `Last Created timeStamp ${dateString}`;

  //Creating a file to add timestamp string
   fs.writeFileSync(`${dirPath}/date-time.txt`, timeStamp, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Created");
    }
  });
  //sending file to frontend
  res.sendFile(path.join(__dirname,"timestamp/date-time.txt"))
  
});

app.listen(3001, () => {
  console.log("Running at 3001");
});
