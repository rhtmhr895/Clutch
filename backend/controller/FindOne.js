const FindSingle = require('../model/ProductSchema');

const FindPD = async (req,res)=>{
      FindSingle.findById(req.params.id, (err,result)=>{
        if(err){
            res.status(404).send({message:"Product Not Found"});
        }
        res.send(result)
    });
};

module.exports = {FindPD}