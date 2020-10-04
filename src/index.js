
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  let i = 0;

  if (matrix === undefined) {
    return result;
  }
  while (i < matrix.length) {
      if (i === 0 || i % 2 === 0) {
      result.push(matrix[i]);
      i++;
    }
    else {
      result.push(matrix[i].reverse());
      i++;
    }
  }
  return result.flat();
}
