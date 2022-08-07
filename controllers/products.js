const getAllProductsStatic = async (req, res) => {
  throw new Error('Testing async errors')
  res.status(200).json({ msg: `product testing routes` })
}

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: `product  routes` })
}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
}
