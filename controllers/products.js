const Product = require('../models/products')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({ products })
}

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: `product  routes` })
}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
}
