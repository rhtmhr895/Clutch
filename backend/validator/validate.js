const joi = require('joi');

const validateNewPrd = joi.object({
    category:joi.string().required(),
    brand:joi.string().required(),
    slug:joi.string().required(),
    desc:joi.string().required(),
    size:joi.string().required(),
    availableQty:joi.number().required(),
    image:joi.string().required(),
    price:joi.number().required(),
    color:joi.string().required(),
});

module.exports = validateNewPrd;