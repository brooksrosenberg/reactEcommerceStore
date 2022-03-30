const router = require('express').Router();
const userRoute = require('./user');
const productRoute = require('./product');
const cartRoute = require('./cart');
const orderRoute = require('./order')
const authRoute = require('./auth')

router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/cart', cartRoute);
router.use('/order', orderRoute);
router.use('/auth', authRoute);


module.exports = router;