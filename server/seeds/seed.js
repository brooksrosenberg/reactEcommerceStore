const db = require('../config/connection');
const { Cart, Product, User } = require('../models');

const cartData = require('./cartData.json');
const productData = require('./productData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  // clean database
  await Cart.deleteMany({});
  await Product.deleteMany({});
  await User.deleteMany({});

  // bulk create each model
  const carts = await Cart.insertMany(cartData);
  const products = await Product.insertMany(productData);
  const users = await User.insertMany(userData);

  console.log('all done!');
  process.exit(0);
});
