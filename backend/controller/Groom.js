const Groom = require('../model/Beauty');

const AddBeauty = async(req,res)=>{
    try{
        let addDt = new Groom(req.body);
        let Beauty = await addDt.save();
        res.status(201).json({
            success:'true',
            data:{Beauty}
        })
 
    }catch(e){
        res.send(e)

    }
};

module.exports = {AddBeauty} 
