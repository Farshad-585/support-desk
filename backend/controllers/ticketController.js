const asyncHandler = require('express-async-handler')

// const User = require('../models/User')
// const Ticket = require('../models/Ticket')

// @desc   Get user tickets
// @route  GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'getTickets'})
})

// @desc   Create new ticket
// @route  POST /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'getTickets'})
})

module.exports = {
  getTickets,
  createTicket
}