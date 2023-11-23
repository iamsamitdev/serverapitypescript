const expressfw: any = require('express');
const router = expressfw.Router();
const authController = require('../controllers/authController');

// Register
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

module.exports = router;
