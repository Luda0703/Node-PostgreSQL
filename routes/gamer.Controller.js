const Router = require("express");
const router = new Router();
const gamerController = require("../contpoller/gamer.Controller");

router.post("/high-scores", gamerController.createGamer);

module.exports = router;
