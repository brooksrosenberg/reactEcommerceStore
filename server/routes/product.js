const router = require('express').Router();
const { query } = require('express');
const Product = require('../models/Product');
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('../utils/token-verification');

router.get('/test', (req, res) => {
    res.send('Good test of the product route')
});

//Create Product -- Should Only be Admin (verifyTokenAndAdmin)
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
});

//Update Product by ID --Should Only Be Admin (verifyTokenAndAdmin)
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Delete by ID -- only ADMIN can delete product (verifyTokenAndAdmin)
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(`${deletedProduct} was deleted successfully`);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET Product -- ANYBODY can get product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET all Products -- ANYBODY CAN GET ALL PRODUCTS
router.get('/', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qLocation = req.query.location;
    try {
        let products;
        if(qNew) {
            products = await Product.find().sort({createdAt: -1}).limit(1)
        }else if(qCategory){
            products = await Product.find({category:qCategory})
        } else if (qLocation) {
            products = await Product.find({location:qLocation})
        } else {
            products = await Product.find();
        }
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router