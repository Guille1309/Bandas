var express = require('express');
var router = express.Router();
const bandasController = require("../controllers/bandasController")


router.get('/', bandasController.listadoBandas);

module.exports = router;
