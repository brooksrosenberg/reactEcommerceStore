const {Schema, model} = require('mongoose');

const CartSchema = new Schema(
    {
        userId: {type:String, required:true},
        products: [
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
        ],
    },
    { timestamps: true }
);

const Cart = model("Cart", CartSchema);

module.exports = Cart;