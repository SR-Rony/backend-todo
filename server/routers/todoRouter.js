const router = require("express").Router()
const { getTodo, postTodo, deleteTodo, updateTodo } = require("../controller/todoController")
const { getUser, postUser } = require("../controller/users.Controller")

// all todo route
router.get("/todos",getTodo)
router.post("/todos",postTodo)
router.delete("/todos/:id",deleteTodo)
router.put("/todos/:id",updateTodo)

// all user route
router.get("/users",getUser)
router.post("/users",postUser)


module.exports = router