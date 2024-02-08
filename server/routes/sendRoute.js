const cors = require('cors');
const { sendForm } = require('../controllers/sendController');
const router = require('express').Router();

// /send
router.route('/').post(cors(), sendForm);

module.exports = router;