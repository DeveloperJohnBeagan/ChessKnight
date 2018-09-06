const express = require('express');
//const os = require('os');
const knightPath = require('./ChessKnightPath');

const app = express();

app.use(express.static('dist'));
//app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/getKnightPath', (req, res) => {
  res.send(knightPath({x: 1, y: 1}, {x: 6, y: 5}));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
