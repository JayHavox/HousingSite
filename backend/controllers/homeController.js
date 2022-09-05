const asyncHandler = require('express-async-handler')

//@desc Get Homes 
// @route Get /api/houses
const getHomes = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get Homes'})
})

//@desc Create a Home 
// @route Get /api/houses
const createHome = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Create a Home'})
})

//@desc Update Home 
// @route Update /api/houses/:id
const updateHome = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Edit the Home ${req.params.id}`})
})

//@desc Delete Home 
// @route Delete /api/houses/:id
const deleteHome = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete the Home ${req.params.id}`})
})

module.exports = {
    getHomes, createHome, updateHome, deleteHome
}