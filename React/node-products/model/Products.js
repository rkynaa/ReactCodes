const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required: true
    },
    category : {
        type : String,
        required: true
    }
});

const Products = mongoose.model('products', ProductSchema);
module.exports = Products;