const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Support Desk API',
  })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
