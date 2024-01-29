const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

// routes
router.use('/users', userRouter)

module.exports = router;