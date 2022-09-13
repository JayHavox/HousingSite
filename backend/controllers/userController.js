const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const ExpressError = require('../middleware/errorMiddleware');

//@desc New User
// @route Post /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new ExpressError('Please add all fields')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new ExpressError('User already exists')
    }

    // Hash Password 
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user 
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new ExpressError('Invalid User Data')
    }
})

//@desc Authenticate a User
// @route Post /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new ExpressError('Invalid Credentials')
    }
})

//@desc Get User Data
// @route Get /api/users/me
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

// Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    })
}


module.exports = {
    registerUser, loginUser, getMe
}