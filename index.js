require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const routerAPI = require("./app/router/routerAPI");
const routerFRONT = require("./app/router/routerFRONT");

app.use("/v1/doc", express.static("apidoc")); // répond aux requêtes dont l'url commence par /v1/doc
app.use(express.static("public")); // répond aux requêtes dont l'url commence par / (sous-entendu toutes les urls)
app.use("/v1/cadex", routerAPI); // répond aux requêtees dont l'url commence par /v1/cadex
//app.use(routerFRONT, "/");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

module.exports = app;
