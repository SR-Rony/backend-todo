const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required:[true,"user name is require"],
    },
    email:{
        type: String,
        required:[true,"email is required"],
        unique : [true,"email already exsist"],
        trim : true,
        lowercase : true,
        Validate : {
            Validator : (v)=>{
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message : "Please inter a valide email"
        }
    },
    password:{
        type: String,
        required:[true,"passwort is required"],
        min: [6, 'Must be at least 6, got {VALUE}'],
        set : (v)=>bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    }
}) 

module.exports = mongoose.model("Users",userSchema)