const { Router } = require('express');
const UserName = require('../controllers/UserName');

const routes = new Router();

routes.post("/user", UserName.index);

module.exports = routes;