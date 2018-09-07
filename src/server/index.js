const express = require('express');
//const os = require('os');
const knightPath = require('./ChessKnightPath');

const app = express();

app.use(express.static('dist'));
//app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/getKnightPath', (req, res) => {
  //console.log("-  -  -  -  -  -  -  -  -  -  -  -  -  -  ");
  //console.log(req.query.src);
  //console.log(req.query.dest);
  const result = knightPath(req.query.src, req.query.dest);
  //console.log(JSON.stringify(result))
  res.send(result);
});

app.listen(8080, () => console.log('Listening on port 8080!'));
