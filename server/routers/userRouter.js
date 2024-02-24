const express = require("express")
const { getUser, postUser, postLogin } = require("../controller/users.Controller")
const router = express.Router()

router.get("/users",getUser)
router.post("/users",postUser)
// login user
router.post("/login",postLogin)

module.exports = router