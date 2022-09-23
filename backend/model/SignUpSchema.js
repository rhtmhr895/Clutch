const mongoose = require('mongoose');

const LoginForm = new mongoose.Schema({
    fname: { type: String, required:true },
    lname: { type: String ,required:true},
    email: { type: String ,required:true, unique:true},
    password: { type: String ,required:true},
},{timestamps: true});

module.exports = mongoose.model('SignUp1', LoginForm);