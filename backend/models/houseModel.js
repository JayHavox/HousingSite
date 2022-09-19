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
        required: [true, 'Please add an address'],
        index:true
    },
    state: {
        type: String,
        required: [true, 'Please add a state'],
        minLength: 2,
        index:true
    },
    city: {
        type: String,
        required: [true, 'Please add a city'],
        index:true
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
        index:true
    }
}, {
    timestamps: true
});

HouseSchema.index({
    address:'text',
    state:'text',
    city:'text',
    category:'text'
})



module.exports = mongoose.model('House', HouseSchema)