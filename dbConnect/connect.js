const mongoose= require("mongoose")

const connectDb= async()=>{
    try {
        await mongoose.connect(process.env.URI)
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