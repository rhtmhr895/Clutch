const deletePrd = require('../model/ProductSchema');

const deleteProduct = async(req,res)=>{
    await deletePrd.deleteMany(req.body);
    res.send("All products deleted successfully");
};

module.exports ={deleteProduct};