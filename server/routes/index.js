const sendRoute = require('./sendRoute');
const router = require('express').Router();

router.use('/send', sendRoute);

module.exports = router;