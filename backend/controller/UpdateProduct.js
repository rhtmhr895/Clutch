const updatePdct = require('../model/ProductSchema');

const update = (req,res)=>{
    updatePdct.findByIdAndUpdate(req.params.id, req.body,(err,e)=>{
        if(err){
            res.status(500).send({error:"problem in updating the product please check slug"});
        }
        res.send({message:"Product Updated successfully"})
    })
};

module.exports ={update};