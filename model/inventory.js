const { Schema, model } = require("mongoose")

const inventorySchema = new Schema({
    title: {
        type: String,
        require: ["title field required!", true]
    },
    category: {
        type: String,
        enum: ["Technology", "Travel", "Food"]
    },
    imageUrl:{
        type:String,
        require:["Image Url is not added", true]
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    description: {
        type: String,
        require: ["description field required!", true]
    }
}, {
    timestamps: true
})

const Inventory = model("inventory", inventorySchema)

module.exports = Inventory