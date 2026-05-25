var express = require("express");
var router = express.Router();

var cubosController = require("../controllers/cubosController");

router.post("/cadastrarCubo", function (req, res) {
    console.log('to no routes')
    cubosController.cadastrarCubo(req, res);
});

router.post("/puxarCubos", function (req, res) {
    cubosController.puxarCubos(req, res);
});

module.exports = router;