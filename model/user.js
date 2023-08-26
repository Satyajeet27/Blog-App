const {Schema, model}= require("mongoose")
const bcrypt= require("bcryptjs")
const userSchema= new Schema({
    userName:{
        type:String,
        require:["username field required!", true]
    },
    email:{
        type:String,
        require:["email field required!", true],
        unique:true
    },
    address:{
        type:String,
        require:["address field required!", true]
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default:"user"
    },
    password:{
        type:String,
        require:["password field required!", true]
    }
},{
    timestamps:true
})

userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(this.password,salt)
    this.password=hashPassword
    next()
})

const User= model("user",userSchema)


module.exports= User