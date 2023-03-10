const express = require('express');
const app = express();
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, access_token');

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

app.use(express.static(__dirname + '/docs'));

var port = process.env.PORT || 8080;
app.set('port', port);

app.listen(port, () => console.log(`App started on port ${port}.`));
