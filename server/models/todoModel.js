const mongoose = require("mongoose")
const {Schema} = mongoose;

const todoSchema = new Schema({
    title:{
        type : String,
        required: [true,"title is required"]
    },
    description:{
        type : String,
        required :[true,"description is required"]
    }
})


module.exports = mongoose.model("Todo",todoSchema)