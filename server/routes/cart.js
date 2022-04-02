const router = require('express').Router();
const { query } = require('express');
const Cart = require('../models/Cart');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utils/token-verification');

router.get('/test', (req, res) => {
    res.send('Good test of the cart route')
});

//CREATE CART -- ANY LOGGED IN USER can create a cart (VerifyToken)
router.post('/', async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE cart -- ANY LOGGED in user can update THEIR OWN car (verifyTokenAndAuth)
router.put('/:id', async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new:true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err)
    }
});

//DELETE LOGGED IN USER deletes OWN cart (verifyTokenAndAuth)
router.delete('/:id',  async (req,res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart was emptied")
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET USER cart (verifyTokenAndAuth)
router.get('/find/:id', async (req, res) => {
    try {
        const userCart = await Cart.findOne({ userId: req.params.id});
        res.status(200).json(userCart)
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL CARTS -- ADMIN ONLY (verifyTokenAndAdmin)
router.get('/find', async(req,res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router