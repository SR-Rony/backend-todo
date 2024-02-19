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

// login users
const postLogin =async(req,res)=>{
    try{
        const {email,password}=req.body
        const user = await Users.find({email:email})
        if(user&&user.password==password){
            res.status(200).send("user is valid ")
            console.log('valid user');
        }else{
            res.status(400).send("not valid user")
            console.log('not valid user');
        }

    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = {getUser,postUser,postLogin}