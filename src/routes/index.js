const express = require('express')
const router = express.Router();

const ValidationController = require("../controllers/validation-controller")

router.post("/isvalid", ValidationController.isValid)

module.exports = router