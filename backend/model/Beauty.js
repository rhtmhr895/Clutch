const mongoose = require('mongoose');

const Beauty = new mongoose.Schema({
    category:{type:String, required:true},
    brand:{type:String, required:true},
    desc:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:String, required:true},
    quantity:{type:String, required:true}

})

module.exports = mongoose.model('beautyPdt', Beauty)