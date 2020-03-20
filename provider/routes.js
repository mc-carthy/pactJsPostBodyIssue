let router = require('express').Router();

let users = [];

router.post('/users', function(req, res) {
    console.log(req);
    const user = req.body;
    users.push({
        id: users.length + 1,
        name: user.name
    });
    res.json(users[users.length - 1]);
});

module.exports = router