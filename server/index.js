const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen('http://localhost:4000');