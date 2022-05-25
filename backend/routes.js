const authController = require('./controllers');

const router = require('express').Router();

router.post('/api/send-otp', authController.sendOtp);

module.exports = router