const Product = require('../models/product_manager.model')

module.exports.findAllProducts = (req, res)=>{
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts})
        })
        .catch(err => res.json({ message: 'There is an error that occured', error: err }))
}

module.exports.createProduct = (req, res)=>{
    console.log("This is what req.body returned --> ", req.body)
    Product.create(req.body)
        .then(createdProduct=>{
            res.json({ results: createdProduct})
        })
        .catch(err => res.json({ message: 'There is an error that occured', error: err }))
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(foundProduct=>{
            res.json({ results: foundProduct })
        })
        .catch(err => res.json({ message: 'There is an error that occured', error: err }))
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
        .catch(err => res.json({ message: 'There is an error that occured', error: err }))
}

module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
            res.json({ results: deletedProduct })
        })
        .catch(err => res.json({ message: 'There is an error that occured', error: err }))
}