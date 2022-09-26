const express = require('express');
const router = express.Router();


const AddProduct = require('../controller/AddProduct');
const GetProducts = require('../controller/GetProduct');
const DeleteProducts = require('../controller/DeleteProduct');
const DeleteSinglePd = require('../controller/DeleteOne');
const UpdatePdct = require('../controller/UpdateProduct');
const RegisterNew = require('../controller/Register');
const LoginUser = require('../controller/login');
const CheckZip = require('../controller/CheckPincode');
const AddZip = require('../controller/AddPin');

router.post('/AddProduct',AddProduct.newProduct);
router.get('/GetProducts',GetProducts.getAllProducts);
router.delete('/DeleteAll',DeleteProducts.deleteProduct);
router.delete('/DeleteOne/:slug',DeleteSinglePd.delOnePrdt);
router.patch('/UpdateProduct/:id',UpdatePdct.update);
router.post('/Register', RegisterNew.Register);
router.post('/Login', LoginUser.Login);
router.post('/Pincode', CheckZip.CheckPin);
router.post('/AddPin', AddZip.AddPin);


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