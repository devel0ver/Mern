const JokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes)
    app.post('/api/jokes', JokeController.createJoke)
    app.get('/api/jokes/:id', JokeController.getOneJoke)
    app.put('/api/jokes/:id', JokeController.updateOneJoke)
    app.delete('/api/jokes/:id', JokeController.deleteOneJoke)
}