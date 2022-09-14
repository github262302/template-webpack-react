const express = require("express");
const routes = express.Router();
routes.get("/api/fsd", function (req, res) {
    res.status(200).send({ data: { msg: "success" } });
});
routes.get("/vimjs", function (req, res) {
    res.status(301).setHeader("Location", "https://vimjs.com").send({});
});
routes.get("/github", function (req, res) {
    res.status(301).setHeader("Location", "https://github.com").send({});
});
module.exports = { routes };
