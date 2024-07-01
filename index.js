const express = require("express");
const app = express();

app.get('/', (req, res) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("User IP Address:", ipAddress);
  res.json({ ipAddress });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

module.exports = app;
