const Product = require('../models/product_manager.model')

module.exports.findAllProducts = (req, res)=>{
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts})
        })
        .catch(err => res.json({ message: 'Something went wrong' }))
}

module.exports.createProduct = (req, res)=>{
    Product.create(req.body)
        .then(createdProduct=>{
            res.json(createdProduct)
        })
        .catch(err => res.json({ message: 'Something went wrong' }))
}

module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
        )
        .then(updatedProduct=>{
            res.json({ results: updatedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong' }))
}

module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
            res.json({ results: deletedProduct })
        })
        .catch(err => res.json({ message: 'Something went wrong' }))
}