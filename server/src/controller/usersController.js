const createJsonWebToken = require("../helper/jsonWebToken");
const Users = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


const { jwtSecrictKey } = require("../secrict");
const emailNodmailer = require("../helper/email");
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
        const {name,email,password,images}=req.body

        // exists user email chack
        const userExists = await Users.exists({email:email})

        if(userExists){
            return res.status(401).send({
                success:false,
                messages:"user already exisis"
            })
            
        }

        // create jsonwebtoken
      let token = createJsonWebToken({
            name:name,
            email:email,
            password:password,
            images:images
            },
            jwtSecrictKey,
            "10m"
        )

        console.log("token :",token);

        const emailData={
            name:name,
            email:email,
            subject:"action activation email",
            html:`
                <h1>Hello ${name}</h1>
                <p>please click hear to <a href="http://localhost:5173/verification/${token}">active your email</a></p>
            `
        }
        // user verification email send
       let mailSend = await emailNodmailer(emailData)
       if(mailSend){
        res.status(200).send({
            success:true,
            message:"user email send"
        })
       }else{
        res.status(500).send({
            success:false,
            message:"email not send"
        })
       }
        
    }catch(err){
        res.status(404).send({message:err.message})
    }
}

// verify user
const verifyUser = async(req,res)=>{
    try{
        const token = req.body.token
        // token error throw
        if(!token){
            throw new Error("token is not found")
        }
        // user decoded data
        let decoded = jwt.verify(token,jwtSecrictKey)
        // decoded error throw
        if(!decoded){
            throw new Error('user is not verify')
        }
        // user exists chack
        const userExists = await Users.exists({email:decoded.email})
        // user email exists error 
        if(userExists){
            console.log("exists error");
          return  res.status(500).send({
                success:false,
                message:"user already exisis"
            })

        }
        // new user create
        await Users.create(decoded)

        // user create successfull messages
        res.status(201).send({
            success:true,
            message:'user was register successfully'
        })
        
    }catch(err){
        res.status(404).send({message:err.message})
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

// forgot password
const forgotPassword =async(req,res)=>{
    try{
        let email = req.body.email;

        let userEmail = await Users.findOne({email:email})
        if(!userEmail){
          return res.status(500).send({
                success:false,
                message:"Invalid email"
            })
        }

        // console.log(userEmail);
        // user forgot password token create
        let token = createJsonWebToken({
            name:userEmail.name,
            email:userEmail.email,
            password:userEmail.password,
            images:userEmail.images
            },
            jwtSecrictKey,
            "10m"
        )
        
        const emailData={
            email:email,
            subject:"reset your password",
            html:`
                <h1>for your email ${email}</h1>
                <p>please click hear to <a href="http://localhost:5173/newpassword/${token}">set new password</a></p>
            `
        }
      let sendEmail = await emailNodmailer(emailData)
      if(sendEmail){
        res.status(200).send({
            success:true,
            message:"user email send",
            email:email
        })
      }else{
        res.status(500).send({
            success:false,
            message:"email not send",
        })
      }

    }catch(err){
        res.status(500).send(err.message)
    }
}

// user new password set
const newPassword =async(req,res)=>{
    try{
        let upPassword = req.body.password;
        let token = req.body.token;
        if(!token){
          return res.status(500).send({
                success:false,
                message:"token not found"
            })
        }

        const decoded = jwt.verify(token,jwtSecrictKey)

        const updatePassword = await Users.findOneAndUpdate({email:decoded.email},{$set:{password:upPassword}},{new:true});

      if(updatePassword){
        res.status(200).send({
            success:true,
            message:"user password is update",
            password:updatePassword
        })
      }else{
        res.status(500).send({
            success:false,
            message:"password not update",
        })
      }

    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = {getUser,postUser,postLogin,verifyUser,forgotPassword,newPassword}