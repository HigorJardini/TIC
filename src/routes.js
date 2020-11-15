const { Router } = require('express');

const User = require('./app/models/User');

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name        : "Name",
        email       : "email@email.com",
        password    : "password",
        birthday    : new Date(),
        gender      : 1,
        status      : 1
    });

    return res.json(user);
});

module.exports = routes;