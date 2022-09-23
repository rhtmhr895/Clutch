const getPrd = require('../model/ProductSchema');

const getAllProducts = (req,res)=>{
    getPrd.find({},(err,result)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.send(result);
        }
    });
};

module.exports = {getAllProducts};