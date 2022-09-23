const login = require('../model/SignUpSchema');
const chk = require('bcrypt');
const v2 = require('../validator/loginValidation');

const Login = async(req,res)=>{
    try{
        let validUser = await v2.validateAsync(req.body);
        if(validUser){
            let body = req.body;
            let UserP = await login.findOne({email:body.email});
            if(UserP){
                let checkPassword = await chk.compare(body.password, UserP.password);
                if(checkPassword){
                    res.status(200).json({
                        success:true,
                        message:`Welcome ${UserP.fname}`
                    })
                }
                else {
                    res.status(400).json({error:"wrong password"});
                 }
        
                }
        }
    }catch(err){
        res.status(400).json({message:"User not found"})
    }

};

module.exports = {Login};