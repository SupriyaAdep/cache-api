const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connect = require('./utils/db');

// create express app
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

const route = require('./resources/dummy/dummy.router');

app.use(route);
// app.use(cachedroute);

const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`REST test on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
start();
