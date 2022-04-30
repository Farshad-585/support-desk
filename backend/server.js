const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
require('dotenv').config()
const connectDB = require('./config/db')

// Connect to MongoDB
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Support Desk API',
  })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
