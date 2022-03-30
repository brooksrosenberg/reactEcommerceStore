const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Good test of the order route')
})

module.exports = router