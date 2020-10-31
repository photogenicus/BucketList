const express = require("express")
const create = require('./controller')

const router = express.Router();

router.post("/user", create, (req, res) => {
    res.status(200).json(res.locals.user);
})

module.exports = router;