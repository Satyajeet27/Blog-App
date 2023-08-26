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
    image:{
        type:String,
        require:["Image need to be uploaded first", true]
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