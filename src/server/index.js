const express = require('express');
const knightPath = require('./ChessKnightPath');

const app = express();

app.use(express.static('dist'));

app.get('/api/getKnightPath', (req, res) => {
  const result = knightPath(req.query.src, req.query.dest);
  res.send(result);
});

app.listen(8080, () => console.log('Listening on port 8080!'));
