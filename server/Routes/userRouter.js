const express = require("express");
const router = express.Router();
const userControllers = require("../Controllers/userControllers");

router.route("/addusers").post(userControllers.addusers);
router.route("/login").post(userControllers.login);
router.route("/viewusers").get(userControllers.viewusers);
router.route("/deleteusers/:id").delete(userControllers.deleteusers);


module.exports = router;