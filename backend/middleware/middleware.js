const ExpressError = require('./errorMiddleware');
const {houseSchema} = require ('../validations/schemas.js')

const validateHouse = (req, res, next) => {
    const {error}= houseSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg,400)
    } else {
        next();
    }
}

module.exports = validateHouse;