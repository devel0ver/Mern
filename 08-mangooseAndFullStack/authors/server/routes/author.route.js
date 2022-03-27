const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    //find all authors
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.post('/api/authors', AuthorController.creatOneAuthor)
    app.get('/api/authors/:id', AuthorController.getOneAuthor)
    app.put('/api/authors/:id', AuthorController.updateOneAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteOneAuthor)
}