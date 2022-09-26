const Zip = require('../model/Pincodes');

const AddPin = async(req,res)=>{
    try{
     let SavePin= new Zip(req.body);
     let AddZip = await SavePin.save();
     res.status(201).json({
        success:"true",
        data:{
            pin : AddZip.pincode
        }
     })
    }catch(e){
        res.status(400).send(e)
    }
}

module.exports ={AddPin}