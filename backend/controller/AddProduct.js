const ProductSchema = require('../model/ProductSchema');
const newPrd = require('../model/ProductSchema');
const validate = require('../validator/validate')


    //-------------------------------------------------//  
   //  API TO ADD PRODUCT IN THE DATABASE             //
  //   USING CONTROLLER                              //
 //                                                 //
//-------------------------------------------------// 


const newProduct = async(req,res)=>{
    try{
        let valid = await validate.validateAsync(req.body);
        if(valid){
            let store = new newPrd(req.body);
            let Prodt = await store.save();
            res.status(201).json({
                success:true,
                data :{
                   name:Prodt.brand,
                   size:Prodt.size,
                   image:Prodt.image,
                   price:Prodt.price
                }
            });

        }

    }catch(e){
        res.status(500).send({e});
    }
    
};

module.exports = {newProduct}