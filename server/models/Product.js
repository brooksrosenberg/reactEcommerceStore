const {Schema, model} = require('mongoose');

const ProductSchema = new Schema(
    {   
        productId: {type:String, unique:true},
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

const Product = model("Product", ProductSchema);

module.exports = Product;