const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded());

// db simulation
const players = [
  {
    name: 'Boban',
    lastName: 'Sugareski'
  },
  {
    name: 'Kosta',
    lastName: 'Petrov'
  },
  {
    name: 'Nikola',
    lastName: 'G.'
  }
];

app
  .get('/people', (req, res) => {
    console.log('Ova se query params', req.query)
    res.send({
      message: 'GET request to /people',
      players: players,
      name: req.body.name
    });
  })
  .get('/people/:id', (req, res) => {
    // kod sto go naogja korisnikot po id
    console.log(req.params.id)
    const user = { name: 'Boban' }

    res.send(user)
  })
  .post('/people', (req, res) => {
    console.log('Ova e body na request', req.body)
    res.send('POST /people')
  })

app.listen(3000, () => { console.log('App is running on port 3000....'); });

// da se instaliraat modulite
// 1. npm init vo folder-ot kaj sto kje stoi aplikacijata
// 2. npm i express nodemon
