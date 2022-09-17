const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HouseSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        min: 0
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    state: {
        type: String,
        required: [true, 'Please add a state'],
        minLength: 2
    },
    city: {
        type: String,
        required: [true, 'Please add a city']
    },
    zipcode: {
        type: Number,
        required: [true, 'Please add a zipcode'],
        min: 0
    },
    bedrooms: {
        type: Number,
        required: [true, 'Please add number of bedrooms'],
        min: 1
    },
    bathrooms: {
        type: Number,
        required: [true, 'Please add number of bathrooms'],
        min: 1
    },
    sqft: {
        type: Number,
        required: [true, 'Please add the sqft'],
        min: 1
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    image: {
        type: String,
        required: [true, 'Please add an image']
    },
    category: {
        type: String,
        enum: ['Apartment', 'House', 'Condo', 'Townhouse']
    }
}, {
    timestamps: true
});




module.exports = mongoose.model('House', HouseSchema)