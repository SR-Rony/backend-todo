const Users = require("../models/userModel")

// get users
const getUser = (req,res)=>{
    try{

        res.status(200).send("i am get users")

    }catch(err){
        res.status(404).send("error hear :",err)
    }
}

// post users
const postUser = async(req,res)=>{
    try{
        const {name,email,password}=req.body

        const newUser = new Users({
            name:name,
            email:email,
            password:password
        })

        await newUser.save()

        if(newUser){
            res.status(200).send({
                success:true,
                message:"new user is create",
                data : newUser
            })
        }else{
            res.status(500).send({
                success:false,
                message:"new user is not create",
            })
        }
    }catch(err){
        res.status(404).send("error hear :",err)
    }
}

module.exports = {getUser,postUser}