import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

// @desc   Fetch all products
// @GET    GET api/products
// @access Public 
router.get('/', asyncHandler(async(req, res) => {
  const products = await Product.find({})

  res.json(products)
}))

// @desc   Fetch single product 
// @GET    GET api/products/:id
// @access Public 
router.get('/:id', asyncHandler(async(req, res) => {
  //let product = '' 
  //if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
  // Yes, it's a valid ObjectId, proceed with `findById` call.
    const product = await Product.findById(req.params.id) 
  //}

    if(product) {
      res.json(product)
    }else {
      res.status(404)
      throw new Error('Product not found')
    }

}))


export default router