const router = require('express').Router();
const Product = require('../models/Product');
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require('../utils/token-verification');

router.get('/test', (req, res) => {
    res.send('Good test of the product route')
})

//Create Product
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body)
    try {

    } catch(err) {
        res.status(500).json(err)
    }
})
 

module.exports = router