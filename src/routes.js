const {Router, response} = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    return response.status(200).json({message: 'Hello World!'});
});

module.exports = routes;