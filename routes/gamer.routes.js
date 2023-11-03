const Router = require("express");
const router = new Router();
const gamerController = require("../contpoller/gamer.Controller");

router.post("/record", gamerController.createGamer);
router.get("/record", gamerController.getUsers);

module.exports = router;
