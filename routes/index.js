const express = require('express');
const router = express.Router();
const bandasController = require("../controllers/bandasController");

router.get('/', bandasController.listadoBandas);

router.get('/id/:id', bandasController.detalleBanda);

module.exports = router;
