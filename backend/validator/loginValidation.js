const joi2 = require('joi');

const loginValid = joi2.object({
    email: joi2.string().email().required(),
    password:joi2.string().min(8).max(15).required()
});

module.exports = loginValid;