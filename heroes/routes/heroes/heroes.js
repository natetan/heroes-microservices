const router = require('express').Router();

const heroesData = require('../../data/heroes.json');
const powers = require('../../data/powers.json');

const port = process.argv.slice(2)[0];

router.get('/', (req, res) => {
  console.log('Returning heroes list');
  res.send(heroesData);
});

router.get('/powers', (req, res) => {
  console.log('Returning powers list');
  res.send(powers);
});

router.post('/hero/**', (req, res) => {
  const heroId = parseInt(req.params[0]);
  const foundHero = heroesData.find(subject => subject.id === heroId);

  if (foundHero) {
    for (let attribute in foundHero) {
      if (req.body[attribute]) {
        foundHero[attribute] = req.body[attribute];
        console.log(`Set ${attribute} to ${req.body[attribute]} in hero: ${heroId}`);
      }
    }
    res.status(202).header({ Location: `http://localhost:${port}/hero/${foundHero.id}` }).send(foundHero);
  } else {
    console.log(`Hero not found.`);
    res.status(404).send();
  }
});

module.exports = router;