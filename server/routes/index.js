const { Router } = require("express");

const { userController } = require("./controllers");

const router = Router();

router.post("/user", userController.create, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post("/signup", userController.validate, (req, res) => {
  res.status(200).json(res.locals.user);
});

module.exports = router;
