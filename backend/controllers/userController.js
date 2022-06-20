const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc  Register new user
// @route POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register user" });
});

// @desc  Authenticate user
// @route POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

// @desc  Get user data
// @route GET /api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "Get user data " });
});

module.exports = { registerUser, loginUser, getMe };
