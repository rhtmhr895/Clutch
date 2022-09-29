const express = require('express');
const router = express.Router();

//===============IMPORTED METHODS FROM CONTROLLER==============//

const AddProduct = require('../controller/AddProduct');
const GetProducts = require('../controller/GetProduct');
const DeleteProducts = require('../controller/DeleteProduct');
const DeleteSinglePd = require('../controller/DeleteOne');
const UpdatePdct = require('../controller/UpdateProduct');
const RegisterNew = require('../controller/Register');
const LoginUser = require('../controller/login');
const CheckZip = require('../controller/CheckPincode');
const AddZip = require('../controller/AddPin');
const FindItem = require('../controller/FindOne');

//====================ROUTING STARTS HERE====================//

router.post('/AddProduct', AddProduct.newProduct);
router.get('/GetProducts', GetProducts.getAllProducts);
router.delete('/DeleteAll', DeleteProducts.deleteProduct);
router.delete('/DeleteOne/:slug', DeleteSinglePd.delOnePrdt);
router.patch('/UpdateProduct/:id', UpdatePdct.update);
router.post('/Register', RegisterNew.Register);
router.post('/Login', LoginUser.Login);
router.get('/Pincode', CheckZip.CheckPin);
//router.post('/AddPin', AddZip.AddPin);
router.get('/Product/:id', FindItem.FindPD);


module.exports = router;




// const register = require('../model/SignUpSchema')
// const crypt = require('bcrypt')

// router.post('/Register', async (req, res) => {

//     console.log(req.body);

//     try {

//         const newUser = new register({

//             fname: req.body.fname,
//             lname: req.body.lname,
//             email: req.body.email,
//             password: req.body.password,

//         })

//         const getSaveUser = await newUser.save();

//         res.send(getSaveUser);
//     }
//     catch (e){

//         res.send('data uplpd nhi hai');
//     }

// })