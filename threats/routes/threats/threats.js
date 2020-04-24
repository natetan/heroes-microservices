const router = require('express').Router();

const threats = require('../../data/threats.json');

const heroesService = 'http://localhost:8081';

router.get('/', (req, res) => {
  console.log('Returning threats list');
  res.send(threats);
});

router.post('/assignment', (req, res) => {
  request.post({
    headers: { 'content-type': 'application/json' },
    url: `${heroesService}/hero/${req.body.heroId}`,
    body: `{
          "busy": true
      }`
  }, (err, heroResponse, body) => {
    if (!err) {
      const threatId = parseInt(req.body.threatId);
      const threat = threats.find(subject => subject.id === threatId);
      threat.assignedHero = req.body.heroId;
      res.status(202).send(threat);
    } else {
      res.status(400).send({ problem: `Hero Service responded with issue ${err}` });
    }
  });
});

module.exports = router;