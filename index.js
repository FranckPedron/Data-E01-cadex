require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const router = require("./app/router");

app.use(express.static("public"));
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

module.exports = app;
