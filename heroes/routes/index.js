const routes = require('express').Router();
const heroes = require('./heroes/heroes');

routes.get('/', (req, res) =>  {
  res.status(200).json({message: 'Connected!'});
});

routes.use('/heroes', heroes);

module.exports = routes;