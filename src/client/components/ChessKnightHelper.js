
export function chessNotation(x, y) {
  const s = "abcdefgh".split("");
  let notation = s[y];
  notation = notation + (x+1);
  return notation;
}


