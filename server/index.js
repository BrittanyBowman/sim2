const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const controller = require("./controller");

const { PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(bodyParser.json());

//Database connection
massive(CONNECTION_STRING, { scripts: __dirname + "/db" })
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

  //endpoints
app.get('/api/pt2/houses', controller.getAll);
app.post('/api/pt2/houses', controller.create);
app.delete('/api/pt2/house/:id', controller.delete);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
