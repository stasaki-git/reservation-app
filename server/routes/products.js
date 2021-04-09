const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res) {
  Product.find({}, function(err, fondProducts) {
    return res.json(fondProducts)
  })
})

router.get('/:productId', function(req, res) {
  const productId = req.params.productId

  Product.findById(productId, function(err, fondProduct) {
    if(err) {
      console.log("productId not found!!")
      return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    }

    console.log("productId found")
    return res.json(fondProduct)
  })
})


module.exports = router
