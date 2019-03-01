const express = require("express");
const apiRoute = require('./routes/api');

const app = express();
app.use('/api', apiRoute);

const PORT = process.env.port || 3000;
app.listen(PORT);
