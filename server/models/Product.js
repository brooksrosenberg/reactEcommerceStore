const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {type:String, required:true, unique:true},
        description: {type:String, required:true, unique:true},
        img: {type:String, required:true},
        category: { type:String },
        size: {type:String},
        price: {type:Number},
        location: {type:String}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);