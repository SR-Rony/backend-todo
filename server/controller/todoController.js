const Todo = require("../models/todoModel")

const getTodo =(req,res)=>{
    try{
        res.status(200).send('welcome to my server')
    }catch(error){
        console.log(error);
    }
}

// post todo
const postTodo = async(req,res)=>{
    try{

    }catch(error){
        console.log(error);
    }
}

module.exports = {getTodo,postTodo}