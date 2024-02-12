const Todo = require("../models/todoModel")

// get todo list
const getTodo = async(req,res)=>{
    try{
        const todoList = await Todo.find()
        res.status(200).send({
            data:todoList
        })
    }catch(error){
        req.status(500).send({message:error.message})
    }
}

// post todo list
const postTodo = async(req,res)=>{
    try{
      const {title,description}=req.body
      const todo = new Todo({
        title:title,
        description:description
      })
    //   seve todo
      await todo.save()
      if(todo){
          res.status(201).send({
            success:true,
            message:'todo is added',
            todo:todo
          })
      }else{
        res.status(404).send({
            success : false,
            message:'todo is not added'
        })
      }
    }catch(error){
        req.status(500).send({message:error.message})
    }
}

// update todo list
const updateTodo = async (req,res)=>{
    try{
        const {title,description}= req.body;
        const id = req.params.id

        const upTodo = await Todo.findByIdAndUpdate(
            {_id:id},
            {
                $set:{
                    title:title,
                    description:description
                }
            },
            {new:true}
        )

        if(upTodo){
            res.status(201).send({
                success:true,
                message: "todo is update",
                todo:upTodo
            })
        }else{
            res.status(404).send({
                success:false,
                message: "todo is not update"
            })
        }

    }catch(error){
        req.status(500).send({message:error.message})
    }
}

// delete todo list
const deleteTodo = async (req,res)=>{
    try{
        const id = req.params.id
        const deleteToodo=  await Todo.findByIdAndDelete({_id:id})

      if(deleteToodo){
        res.status(200).send({
            success:true,
            message: "todo is delete",
            todo:deleteToodo
        })
      }else{
        res.status(404).send({
            success:false,
            message: "todo is not found",
        })
      }
    }catch(error){
        res.status(500).send({message:error.message})
    }
}

module.exports = {getTodo,postTodo,deleteTodo,updateTodo}