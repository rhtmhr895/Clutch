const mongoose = require('mongoose');

const Pincodes = new mongoose.Schema({
    pincode:{type:Number, required:true}
})

module.exports = mongoose.model('pincode', Pincodes)