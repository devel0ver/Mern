const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must have at least 3 characters!"]
    },

    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [1, "Price must be at least $1!"]
    },

    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must have at least 3 characters"]
    }
    },
    {timestamps:true}
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;