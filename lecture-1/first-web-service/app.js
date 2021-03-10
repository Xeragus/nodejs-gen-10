const express = require('express');
const app = express()

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

app.get('/people', (req, res) => {
  console.log(req.body)
  res.send({
    message: 'GET request to /people',
    players: players,
    name: req.body.name
  });
});

app.listen(3000, () => { console.log('App is running on port 3000....'); });

// da se instaliraat modulite
// 1. npm init vo folder-ot kaj sto kje stoi aplikacijata
// 2. npm i express nodemon
