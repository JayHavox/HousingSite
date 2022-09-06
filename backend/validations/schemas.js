const Joi = require('joi');

module.exports.houseSchema = Joi.object ({
    house: Joi.object({
        price: Joi.number().required().min(0),
        address: Joi.string().required(),
        state:Joi.string().required(),
        zipcode:Joi.number().required().min(0),
        bedrooms:Joi.number().required().min(1),
        bathrooms:Joi.number().required().min(1),
        sqft: Joi.number().required().min(0),
        description:Joi.string().required(),
        image: Joi.string().required(),
        category: Joi.string().valid('Apartment', 'House', 'Condo', 'Townhouse')

    }).required()
});



