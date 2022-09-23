const deleteOnePrd = require('../model/ProductSchema');

    //-------------------------------------------------//  
   //  API TO DELETE ONE PRODUCT FROM THE DATABASE    //
  //   USING CONTROLLER                              //
 //                                                 //
//-------------------------------------------------// 



const delOnePrdt = async(req,res)=>{
    await deleteOnePrd.findOneAndDelete(req.slug);
    res.send("Product Deleted Successfully");
};

module.exports = {delOnePrdt};