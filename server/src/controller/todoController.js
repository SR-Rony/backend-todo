const Todo = require("../models/todoModel")

// get todo list
const getTodo = async(req,res)=>{
    try{
        const todo = await Todo.find()
        res.status(200).send({
            data:todo
        })
    }catch(error){
        req.status(500).send({message:error.message})
    }
}

// post todo list
const postTodo = async(req,res)=>{
    try{
      const {todo}=req.body
      const newTodo = new Todo({
        todo:todo
      })
    //   seve todo
      await newTodo.save()
      if(todo){
          res.status(201).send({
            success:true,
            message:'todo is added',
            todo:newTodo
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
        const {todo}= req.body;
        const id = req.params.id

        const upTodo = await Todo.findByIdAndUpdate(
            {_id:id},
            {
                $set:{
                    todo:todo
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