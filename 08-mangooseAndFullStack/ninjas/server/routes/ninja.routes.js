const NinjaController = require('../controllers/ninja.controller');
const Ninja = require('../models/ninja.model');



module.exports = (app) =>{
    app.get('/api/hello', NinjaController.helloWorld)
    app.get('/api/ninjas', NinjaController.findAllNinjas)
    app.post('/api/ninjas', NinjaController.createNinja)
    app.get('/api/ninjas/:id', NinjaController.getOneNinja)
    app.put('/api/ninjas/:id', NinjaController.updateOneNinja)
    app.delete("/api/ninjas/:id", NinjaController.deleteOneNinja)
}