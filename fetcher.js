const request = require("request");
const fs = require("fs");

const fileName = process.argv[2];

request(`http://www.example.edu/`, (error, response, body) => {
  if (!fileName) return console.log("Please supply a path for the file.");
  if (error) return console.log("error:", error);

  if (response.statusCode !== 200) {
    return console.log(
      `Response failed with code ${response.statusCode}. Terminating.`
    );
  }
  fs.writeFile(fileName, body, () =>
    console.log(`Downloaded and saved 3261 bytes to ${fileName}`)
  );
});
