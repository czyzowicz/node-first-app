const router = require('express').Router();

const path = require("path");

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

module.exports = router;