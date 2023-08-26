const mongoose= require("mongoose")

const URI= "mongodb+srv://satyajeethitk:yGiUwSDI8NokuGAm@cluster0.xc45acm.mongodb.net/blogApp"

const connectDb= async()=>{
    try {
        await mongoose.connect(URI)
        console.log("Database connected")
    } catch (error) {
        console.log({
            message:"Error in connecting mongoDB",
            ...error
        })
    }
}

module.exports={
    connectDb
}