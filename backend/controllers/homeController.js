const asyncHandler = require('express-async-handler');
const ExpressError = require('../middleware/errorMiddleware');
const House = require('../models/houseModel');
const user = require('../models/userModel')


//@desc Get Homes 
// @route Get /api/houses
const getHomes = asyncHandler(async (req, res) => {
    const houses = await House.find({})
    res.status(200).json(houses)
})

//@desc Create a Home 
// @route Get /api/houses
const createHome = asyncHandler(async (req, res) => {

    const house = await House.create({
        price: req.body.price,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        category: req.body.category,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        sqft: req.body.sqft,
        description: req.body.description,
        image: req.body.image,
        zipcode: req.body.zipcode,
        user: req.user.id
    })


    res.status(200).json(house)
})


//@desc Show a specific Home 
// @route Get /api/:id
const showHome = asyncHandler(async (req, res) => {
    const house = await House.findById(req.params.id)

    if (!house) {
        res.status(400)
        throw new ExpressError('Home was not found')
    }
    res.status(200).json(house)
})

//@desc Update Home 
// @route Update /api/houses/:id
const updateHome = asyncHandler(async (req, res) => {
    const house = await House.findById(req.params.id)
    
    if (!house) {
        res.status(400)
        throw new ExpressError('Home not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new ExpressError('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (house.user.toString() !== req.user.id) {
        res.status(401)
        throw new ExpressError('User not authorized')
    }

    const updatedHouse = await House.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    

    res.status(200).json(updatedHouse)
})

//@desc Delete Home 
// @route Delete /api/houses/:id
const deleteHome = asyncHandler(async (req, res) => {
    const house = await House.findById(req.params.id)

    if (!house) {
        res.status(400)
        throw new ExpressError('Home was not found')
    }


    //Checks for user
    if (!req.user) {
        res.status(401)
        throw new ExpressError('User not found')
    }

    // Make sure the logged in user matches the house user
    if (house.user.toString() !== req.user.id) {
        res.status(401)
        throw new ExpressError('User not authorized')
    }

    await house.remove();

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getHomes, createHome, updateHome, deleteHome, showHome
}