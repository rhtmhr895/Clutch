const Pin = require('../model/Pincodes');

const CheckPin = async(req,res)=>{
    try{
       let body = req.body;
       let zip = await Pin.findOne({pincode: body.pincode});
       if(zip){
        res.status(200).send("Delivery Available");
       }else{
        res.status(400).send("Sorry No pincode available");
       }
    }catch(err){
        res.status(400).send(err)
    }
}

module.exports = {CheckPin};