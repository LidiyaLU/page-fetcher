const request = require('request');
const fs = require('fs');
let url = process.argv[2];
let path = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.log("An error occurred:");
    console.log(error);
  }
  if (response.statusCode === 200) {
    fs.writeFile(path, body, () => {
      console.log(`downloaded and saved ${body.length} bytes to ${path}`);
    });
  } else {
    console.log("An error occurred:");
    console.log(response.statusCode);
  }


});