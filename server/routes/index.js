const router = require('express').Router();
const userRoute = require('./user');
const productRoute = require('./product');
const cartRoute = require('./cart');
const orderRoute = require('./order')
const authRoute = require('./auth')
const stripeRoute = require('./stripe')

router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/cart', cartRoute);
router.use('/order', orderRoute);
router.use('/auth', authRoute);
router.use('/checkout', stripeRoute)

module.exports = router;