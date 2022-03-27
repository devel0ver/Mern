const Author = require('../models/author.model');

module.exports.findAllAuthors = (req, res)=>{
    Author.find()
        .then(allAuthors=>{
            res.json({ results: allAuthors })
        })
        .catch(err => res.json({ message: 'There is an error that occured', error : err }))
}

module.exports.creatOneAuthor = (req, res)=>{
    console.log("response if author created --> ", req.body)
    Author.create(req.body)
        .then(createdAuthors=>{
            res.json({ results: createdAuthors })
        })
        .catch(err => res.json({ message: 'There is an error that occured', error : err }))
}

module.exports.getOneAuthor = (req, res)=>{
    Author.findOne({ _id : req.params.id })
        .then(foundAuthor=>{
            res.json({ results: foundAuthor })
        })
        .catch(err => res.json({ message: 'There is an error that occured', error : err }))
}

module.exports.updateOneAuthor = (req, res)=>{
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new:true, runValidators:true }
    )
        .then(updatedAuthor=>{
            res.json({results: updatedAuthor})
        })
        .catch(err => res.json({ message: 'There is an error that occured', error : err }))
}

module.exports.deleteOneAuthor = (req, res)=>{
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor=>{
            res.json({results: deletedAuthor})
        })
        .catch(err => res.json({ message: 'There is an error that occured', error : err }))
}