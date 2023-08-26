const validator= require("validator")
const User = require("../model/user")
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")
const { async } = require("rxjs")


const registerController= async(req, res)=>{
    try {
        const {userName, email, address, password}= req.body
        if(validator.isEmpty(userName,{ ignore_whitespace: true })){
            return res.status(400).send({
                success:false,
                message:"Username field is empty"
            })
        }
        if(!validator.isEmail(email)){
            return res.status(400).send({
                success:false,
                message:"Not valid email"
            })
        }
        if(validator.isEmpty(address,{ ignore_whitespace: true })){
            return res.status(400).send({
                success:false,
                message:"Address field is empty"
            })
        }
        if(validator.isEmpty(password,{ ignore_whitespace: true })){
            return res.status(400).send({
                success:false,
                message:"Password field is empty"
            })
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).send({
                success:false,
                message:"Password should have minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1"
            })
        }
        
        //checking email exits or not
        const existingUser= await User.findOne({email:req.body.email})
        if(existingUser){
            return res.status(400).send({
                success:false,
                message:"User already exist, please login"
            })
        }

        const user= await User.create(req.body)        
        return res.status(201).send({
            success:true,
            message:"User Profile created",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in register API",
            error
        })
    }
}

const loginController= async(req, res)=>{
    try {
        const {email, password}= req.body
        if(!validator.isEmail(email)){
            return res.status(400).send({
                success:false,
                message:"Not valid email"
            }) 
        }
        if(validator.isEmpty(password,{ ignore_whitespace: true })){
            return res.status(400).send({
                success:false,
                message:"Password field is empty"
            })
        }
        //checking user exist in db or not
        const userData= await User.findOne({email})
        const comparePassword= await bcrypt.compare(password,userData.password)
        if(!userData || !comparePassword){
            return res.status(400).send({
                success:false,
                message:"Invalid Email or password"
            })
        }
        const token= jwt.sign({userId:userData._id,
        userName:userData.userName, role:userData.role},process.env.JWT_KEY)
        return res.status(200).send({
            success:true,
            message:"Login Successfully",
            user:{
                userName:userData?.userName,
                _id:userData?._id,
                email:userData?.email
            },
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in login API",
            error
        })
    }
}

//get-current-user
const getCurrentUserController= async(req, res)=>{
    try {
        const user= await User.findOne({_id:req.body.userId})
        console.log(req.body)
        return res.status(200).send({
            success: true,
            message: "User fetched successfully",
            user,
          });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in current user API",
            error
        })
    }
}

module.exports={
    registerController,
    loginController,
    getCurrentUserController
}