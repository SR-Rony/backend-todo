const express = require("express")
const { getUser, postUser, postLogin } = require("../controller/users.Controller")
const router = express.Router()

router.get("/register",getUser)
router.post("/register",postUser)
// login user
router.post("/login",postLogin)

module.exports = router