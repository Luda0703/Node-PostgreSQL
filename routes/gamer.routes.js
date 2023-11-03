const Router = require("express");
const router = new Router();
const gamerController = require("../contpoller/gamer.Controller");

router.post("/high-scores", gamerController.createGamer);
router.get("/high-scores", gamerController.getUsers);

module.exports = router;
