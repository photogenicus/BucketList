const { Router } = require("express");

const { userController } = require("./controllers");

const router = Router();

router.post("/signup", userController.create, (req, res) => {
  res.status(200).json(res.locals.loggedIn);
});

router.post("/login", userController.validate, (req, res) => {
  res.status(200).json(res.locals.loggedIn);
});

router.post("/saveActivity", userController.validate, (req, res) => {
  res.status(200).json(res.locals.activity);
  // res.redirect("client/src/components/user");
});
module.exports = router;
