const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product name is required!"]
    },
    productPrice: {
        type: mongoose.Types.Decimal128,
        required: [true, "Price is required!"]
    },
    productColor: {
        type: String
    },
    productSize: {
        type: Number,
        min: [1]
    },
    productCategory: {
        type: String
    },
    productDescription: {
        type: String
    },
    fileUpload: {
        type: File
    }
    },
    {timestamps:true}
)

const Project = mongoose.model("Project", ProjectSchema)

module.exports = Project;