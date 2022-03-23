const ProductController = require('../controllers/product_manager.controller')

module.exports = app =>{
    app.get('/api/products', ProductController.findAllProducts)
    app.post('/api/products', ProductController.createProduct)
    app.put('/api/products/:id', ProductController.updateOneProduct)
    app.delete('/api/products/:id', ProductController.deleteOneProduct)
}