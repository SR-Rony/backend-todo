const express = require("express")
const { getUser, postUser, postLogin, verifyUser, forgotPassword } = require("../controller/users.Controller")
const upload = require("../middlewares/fileUplod")
const router = express.Router()

router.get("/",getUser)
// register
router.post("/register",upload.single("images") ,postUser)
// verify user
router.post("/verify",verifyUser)
// login user
router.post("/login",postLogin)
// forgot password
router.post("/forgot_password",forgotPassword)

module.exports = router