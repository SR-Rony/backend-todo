const mongoose = require("mongoose")
const {Schema} = mongoose;

const todoSchema = new Schema({
    todo:String
    // description:{
    //     type : String,
    //     required :[true,"description is required"]
    // }
})
    const Todo = mongoose.model("Todo",todoSchema)

module.exports = Todo;