const joi1 = require('joi');

const val = joi1.object({
    fname:joi1.string().required().max(15),
    lname:joi1.string().required().max(15),
    email:joi1.string().email().required(),
    password:joi1.string().min(8).max(15).required()
});

module.exports = val;