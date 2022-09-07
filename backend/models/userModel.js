const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type:String,
        required: [true, 'Please add a name']
    },
    email: {
        type:String,
        required: [true, 'Please add an email'],
        uniqure: true
    },
    password: {
        type:String,
        required: [true, 'Please add a password']
    },
})


module.exports = mongoose.model('User', userSchema)