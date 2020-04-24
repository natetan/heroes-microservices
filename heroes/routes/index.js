const router = require('express').Router();
const heroes = require('./heroes/heroes');

router.get('/', (req, res) =>  {
  res.status(200).json({message: 'Connected to heroes!'});
});

router.use('/heroes', heroes);

module.exports = router;