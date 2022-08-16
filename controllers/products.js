const Product = require('../models/products')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    name: 'bar stool',
  })
  res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
  const { feature, company, name } = req.query
  const queryObject = {}
  if (feature) {
    queryObject.feature = feature === 'true' ? true : false
  }
  if (company) {
    queryObject.company = company
  }
  if (name) {
    queryObject.name = name
  }
  console.log(queryObject)
  const products = await Product.find(queryObject)
  res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
}
