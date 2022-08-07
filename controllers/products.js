const Product = require('../models/products')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    page: 2,
  })
  res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
  const { feature } = req.query
  const queryObject = {}
  if (feature) {
    queryObject.feature = feature === 'true' ? true : false
  }
  console.log(queryObject)
  const products = await Product.find(queryObject)
  res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
}
