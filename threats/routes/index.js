const router = require('express').Router();
const threats = require('./threats/threats');

router.get('/', (req, res) => {
  res.status(200).json({message: 'Connected to threats!'});
});

router.use('/threats', threats);

module.exports = router;