const express = require("express");
const router = express.Router();
const api = require("../controllers/apiController");

router.route("/weather").get(api.fetchWeatherData);


module.exports = router;
