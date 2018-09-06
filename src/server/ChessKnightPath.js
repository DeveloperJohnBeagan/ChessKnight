function makeNode(x, y, dist, move, px = 0, py = 0 ) {
  // x, y, distance, hash id
  let id = getHashCode(x, y, dist);
  return { x, y, dist, id, move, px, py };
}

function getHashCode(x, y, dist) {
  let r = x;
  r = 31 * r + y;
  r = 31 * r + dist;
  return r;
}

function isOnChessBoard(x, y) {
  const sideLength = 8; // 8 squares on each side
  return (x < 0 || y < 0 || x >= sideLength || y >= sideLength) ? false : true;
}

function determinePath(lastNode, visited) {
  let r = [];
  r.unshift({x: lastNode.px, y: lastNode.py});
  let px = lastNode.px;
  let py = lastNode.py;
  for (let dist = lastNode.dist - 1; dist > 0; dist--) {
      visited.forEach( o => {
          if (o.dist == dist && o.x == px && o.y == py) {
              r.unshift({x: o.px, y: o.py});
              let px = o.px;
              let py = o.py;
          }
      });
  }
  return r;
}

function getBestPath(src, dest) {
  const row = [ 2, 2, -2, -2, 1, 1, -1, -1 ];
  const col = [ -1, 1, 1, -1, 2, -2, 2, -2 ];

  let visited = new Map();

  // node queue
  let nodeQueue = [];
  // start node
  let move = 0;
  nodeQueue.push(makeNode(src.x, src.y, 0, move));
  let lastDist = 0;

  let returnVal = [];

  while( nodeQueue.length > 0 ) {

      let node = nodeQueue.shift()
      move++;
      //
      let x = node.x;
      let y = node.y;
      let dist = node.dist;
      if (lastDist != dist) {
          lastDist = dist;
      }

      // destination reached:
      if (x == dest.x && y == dest.y) {
          returnVal = determinePath(node, visited);
          break;
      }

      // do if not already visited
      if (!visited.has(node.id)) {

          visited.set(node.id, node);

          for (let i = 0; i < 8; i++)
          {
              // Get the new valid position of Knight from current
              // position on chessboard and enqueue it in the
              // queue with +1 distance
              const x1 = x + row[i];
              const y1 = y + col[i];

              if (isOnChessBoard(x1, y1))
                  nodeQueue.push(makeNode(x1, y1, dist + 1, move, node.x, node.y));
          }
      }
  }
  return returnVal;
}

module.exports = getBestPath;

//getBestPath({x: 1, y: 1}, {x: 4, y: 4})
//letJsonPath = getBestPath({x: 1, y: 1}, {x: 6, y: 5});



