

const getPrd = require('../model/ProductSchema');

const getAllProducts = (req,res)=>{
    let data = req.query
    getPrd.find({ "category" : data.cat},(err,result)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.send(result);
        }
    });
};

module.exports = {getAllProducts};