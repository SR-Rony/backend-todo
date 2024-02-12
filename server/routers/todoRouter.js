const router = require("express").Router()
const { getTodo, postTodo } = require("../controller/todoController")


router.get("/todos",getTodo)
router.post("/todos",postTodo)


module.exports = router