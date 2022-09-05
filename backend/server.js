const express = require('express')
const dotenv = require('dotenv').config()
const ExpressError = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const houseRoutes = require('./routes/houseRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/houses', houseRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'HomePage' })
})

app.all('*', (req,res,next) => {
    next( new ExpressError('Page Not Found', 404))
})

app.use((err,req,res,next) => {
    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error',{ err });
})

app.listen(port, () => console.log(`Server started on port ${port}`))