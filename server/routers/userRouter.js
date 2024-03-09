const express = require("express")
const { getUser, postUser, postLogin, verifyUser } = require("../controller/users.Controller")
const router = express.Router()

router.get("/",getUser)
// register
router.post("/register",postUser)
// verify user
router.post("/verify",verifyUser)
// login user
router.post("/login",postLogin)

module.exports = router