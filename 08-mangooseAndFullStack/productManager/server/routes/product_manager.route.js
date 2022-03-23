const ProductController = require('../controllers/product_manager.controller')

module.exports = app =>{

    //find all api endpoint
    app.get('/api/products', ProductController.findAllProducts)

    //create one api endpoint
    app.post('/api/products', ProductController.createProduct)

    //find one by id api endpoint
    app.get('/api/products/:id', ProductController.getOneProduct)

    //update one by id api endpoint
    app.put('/api/products/:id', ProductController.updateOneProduct)

    //delete one by id api endpoint
    app.delete('/api/products/:id', ProductController.deleteOneProduct)

}