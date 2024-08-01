const fs = require("fs");

function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `/n${req.method} ${req.url} ${res.statusCode}\n`,
      (err, data) => {
        if (err) {
          console.error("Error writing log:", err);
        } else {
          console.log("Logged request/response");
        }
        next();
      }
    );
  };
}

module.exports = { logReqRes };
