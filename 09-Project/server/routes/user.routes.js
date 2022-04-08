const UserController = require('../controllers/user.controller');

module.exports = app =>{
    
    //find all api endpoint
    app.get('/api/users', UserController.findAllUsers)

    //create one api endpoint
    app.post('/api/users/register', UserController.register)

    //login
    app.post('/api/users/login', UserController.login)

    //find one by id api endpoint
    app.get('/api/users/getuser', UserController.getLoggedInUser)

    //update one by id api endpoint
    app.put('/api/users/:id', UserController.updateOneUser)

    //delete one by id api endpoint
    app.delete('/api/users/:id', UserController.deleteOneUser)

    //logout
    app.get('/api/users/logout', UserController.logout)

}