const asyncHandler = require('express-async-handler')

const House = require('../models/houseModel')


//@desc Get Homes 
// @route Get /api/houses
const getHomes = asyncHandler(async (req,res) => {
    const houses = await House.find()
    res.status(200).json(houses)
})

//@desc Create a Home 
// @route Get /api/houses
const createHome = asyncHandler(async (req,res) => {
    const house = await House.create({
        price: req.body.price,
        address:req.body.address,
        state:req.body.state,
        city:req.body.city,
        category: req.body.category
    })

    res.status(200).json(house)
})

//@desc Update Home 
// @route Update /api/houses/:id
const updateHome = asyncHandler(async (req,res) => {
    const house = await House.findById(req.params.id)

    if(!house) {
        res.status(400)
        throw new Error ('Home was not found')
    }

    const updatedHouse = await House.findByIdAndUpdate(req.params.id, req.body, {new:true,})

    res.status(200).json(updatedHouse)
})

//@desc Delete Home 
// @route Delete /api/houses/:id
const deleteHome = asyncHandler(async (req,res) => {
    const house = await House.findById(req.params.id)

    if(!house) {
        res.status(400)
        throw new Error ('Home was not found')
    }

     await house.remove();

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getHomes, createHome, updateHome, deleteHome
}