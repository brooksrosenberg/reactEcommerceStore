const router = require('express').Router();
const { query } = require('express');
const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utils/token-verification');

router.get('/test', (req, res) => {
    res.send('Good test of the order route')
})

//CREATE Order -- ANY LOGGED IN USER can create a cart (VerifyToken)
router.post('/', async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE Order -- Only ADMIN can update order (verifyTokenAndAdmin)
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new:true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
});

//DELETE -- only ADMIN deletes Order (verifyTokenAndAdmin)
router.delete('/:id', async (req,res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order was deleted")
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET USER Orders -- EACH User gets OWN order (verifyTokenAndAuth)
router.get('/find/:id', async (req, res) => {
    try {
        const userOrder = await Order.find({ userId: req.params.id});
        res.status(200).json(userOrder)
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL Orders -- ADMIN ONLY (verifyTokenAndAdmin)
router.get('/', async(req,res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router