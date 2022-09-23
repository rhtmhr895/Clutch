const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    category:{type:String, required:true},
    brand:{type: String, required:true},
    slug:{type: String, required:true, unique:true},
    desc:{type:String, required:true},
    size:{type:String, required:true},
    availableQty:{type:Number, required:true},
    image:{type:String, required:true},
    price:{type: Number, required:true},
    color:{type: String, required:true}
})

module.exports = mongoose.model('productSchema', Product);