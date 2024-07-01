const express = require("express");
const path = require("path");

const app = express();


app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.render('index', { ip });
});

app.listen(process.env.PORT || 3000);

// Export the app for Vercel serverless functions
module.exports = app;
