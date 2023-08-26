require("dotenv").config()
const express= require("express")
const { connectDb } = require("./dbConnect/connect")
const userRouter= require("./routes/user")
const inventoryRouter= require("./routes/inventory")
const cors= require("cors")
const cloudinary= require("cloudinary").v2

cloudinary.config({
    cloud_name:'dqrtyunuk', 
    api_key:'276262817529335',
    api_secret:"AelbfpyCS9r8pE8SHlgAna4Fw3k"
})

const app= express()
app.use(express.json())
app.use(cors())
app.use("/api/v1/auth/", userRouter)
app.use("/api/v1/inventory/",inventoryRouter)

app.get("/", (req, res)=>{
    return res.status(200).send({
        message:"Hello from server"
    })
})

const startServer= async()=>{
    await connectDb()
    app.listen(8080,()=>console.log("Server running on port: 8080"))
    
}
startServer()