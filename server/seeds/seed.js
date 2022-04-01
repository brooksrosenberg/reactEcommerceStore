const db = require('../config/connection');
const { Cart, Product, User } = require('../models');

const cartData = require('./cartData.json');
const productData = require('./productData.json');
const userData = require('./userData.json');

db.once('open', async () => {
try{
  // clean database
  await User.deleteMany({});
  await Product.deleteMany({});
  await Cart.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const products = await Product.insertMany(productData);
  const carts = await Cart.insertMany(cartData);

} catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
