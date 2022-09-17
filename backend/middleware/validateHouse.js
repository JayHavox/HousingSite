const ExpressError = require('./errorMiddleware');
const House = require('../models/houseModel');


const validateHouse = (req, res, next) => {
    if(!req.body.price) {
        throw new ExpressError ('Price is required', 400)
    }
    else if(!req.body.address) {
        throw new ExpressError ('Address is required', 400)
    }
    else if(!req.body.state) {
        throw new ExpressError ('State is required', 400)
    }
    else if(!req.body.city) {
        throw new ExpressError ('City is required', 400)
    }
    else if(!req.body.category) {
        throw new ExpressError ('Category is required', 400)
    }
    else if(!req.body.bedrooms) {
        throw new ExpressError ('Bedrooms is required', 400)
    }
    else if(!req.body.bathrooms) {
        throw new ExpressError ('Bathrooms is required', 400)
    }
    else if(!req.body.sqft) {
        throw new ExpressError ('Sqft is required', 400)
    }
    else if(!req.body.description) {
        throw new ExpressError ('Description is required', 400)
    }
    else if(!req.body.zipcode) {
        throw new ExpressError ('Zipcode is required', 400)
    }
    else {
        next();
    }
}

module.exports = validateHouse;