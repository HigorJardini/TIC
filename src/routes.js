const { Router } = require('express');

const User = require('./app/models/User');

const routes = new Router();

routes.get('/', async (req, res) => {

    return res.json(user);
});

module.exports = routes;