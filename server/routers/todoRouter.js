const router = require("express").Router()
const { getTodo, postTodo, deleteTodo, updateTodo } = require("../controller/todoController")

// all todo route
router.get("/todos",getTodo)
router.post("/todos",postTodo)
router.delete("/todos/:id",deleteTodo)
router.put("/todos/:id",updateTodo)


module.exports = router