const validator= require("validator")
const Inventory = require("../model/inventory")
const cloudinary= require("cloudinary").v2

cloudinary.config({
    cloud_name: 'dqrtyunuk',
    api_key: '276262817529335',
    api_secret: 'AelbfpyCS9r8pE8SHlgAna4Fw3k'
});
const addArticleController= async(req, res)=>{
    console.log(req.body.userId)
    try {
        const {title, category, description,image}= req.body
        // console.log(req.file)
        // console.log(req.body)
        // console.log(title)
        if(validator.isEmpty(title)){
            return res.status(400).send({
                success:false,
                message:"Title field is empty"
            })
        }
        if(validator.isEmpty(category)){
            return res.status(400).send({
                success:false,
                message:"category field is empty"
            })
        }
        if(validator.isEmpty(description)){
            return res.status(400).send({
                success:false,
                message:"Description field is empty"
            })
        }
        if(validator.isEmpty(image)){
            return res.status(400).send({
                success:false,
                message:"Image was not uploaded"
            })
        }
        const result= await cloudinary.uploader.upload(image,{folder:"blogApp/inventories/",public_id:`${req.body.userId}_${Date.now()}`})
        console.log(result)
        const data= await Inventory.create({
            title,category, description, image:result.url, userId:req.body.userId
        })
        res.status(200).send({
            success:true,
            message:"Article saved successfully"
        })
    } catch (error) {
        console.log("Error in Add Article API",error)
        return res.status(500).send({
            success:false,
            message:"Error in Add Article API",
            error
        })
    }
}

const inventoryController= async(req, res)=>{
    console.log("inventoryController",res.body)
    return res.status(200).send({
        message:"testing auth"
    })
}

const getArticleController= async(req, res)=>{
    try {
        const data= await Inventory.find({}).populate("userId")
        return res.status(200).send({
            success:true,
            message:"Articles fetched successfully",
            data
        })
    } catch (error) {
        console.log("Error in Add Article API",error)
        return res.status(500).send({
            success:false,
            message:"Error in Add Article API",
            error
        }) 
    }
}
module.exports= {addArticleController, inventoryController, getArticleController}