const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HouseSchema = Schema ({
    price:Number,
    address: String, 
    state: String,
    city: String, 
    zipcode: String, 
    bedrooms: Number,
    bathrooms: Number, 
    sqft: Number,
    description:String,
    image: String,
    category: {
        type:String,
        enum:['Apartment', 'House', 'Condo', 'Townhouse']
    }
}, {
    timestamps: true
});

HouseSchema.static('getCategories', function() {
    return [...this.schema.paths.category.enumValues]
})

HouseSchema.method('getCategories', function() {
    return[...this.schema.paths.category.enumValues]
})

module.exports = mongoose.model('Houses', HouseSchema )