const Users = require("../models/userModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;

// get users
const getUser = async(req,res)=>{
    try{

       const allUser = await Users.find();
       if(allUser){
        res.status(200).send({
            success:true,
            users:allUser
        })
       }else{
        res.status(400).send({
            success:false,
            users:allUser
        })
       }

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
        // const {email,password}=req.body
        let email = req.body.email;
        let password = req.body.password
        
        const user = await Users.findOne({email:email})
        if(user){
            bcrypt.compare(password, user.password, (err, result)=>{
                if(result===true){
                    res.status(200).send("user is valid ")
                    console.log('valid user');
                }else{
                    res.status(400).send({message:"invalid password"})
                }
            })
            
        }else{
            res.status(404).send({message:"invalid email"})
        }

    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = {getUser,postUser,postLogin}