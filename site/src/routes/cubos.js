var express = require("express");
var router = express.Router();

var cubosController = require("../controllers/cubosController");

router.post("/cadastrarCubo", function (req, res) {
    console.log('to no routes')
    cubosController.cadastrarCubo(req, res);
});

module.exports = router;