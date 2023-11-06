const Router = require("express");
const router = new Router();
const userController = require("../contpoller/user.controller");

router.post("/user", userController.createUser);
router.get("/user", userController.getUsers);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
