const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get('/', (req, res) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, html) => {
    if (err) {
      res.status(500).send("Error reading HTML file");
      return;
    }
    const updatedHtml = html.replace('<%= ipAddress %>', ipAddress);
    res.send(updatedHtml);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

module.exports = app;
