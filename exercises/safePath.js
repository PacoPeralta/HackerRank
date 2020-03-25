const data = [
  [0,0,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,1,'F',0],
  [1,1,1,1,0],
];

const safePath = () => {
  let rowIdx = 0;
  let elIdx = 0;
  const isSafe = (rowIdx, elIdx) => {
    return data[rowIdx][elIdx] === 0 || data[rowIdx][elIdx] === 'F';
  };
  const finalIsInRow = (arr) => {
    return arr.includes('F');
  };
  const goDown = () => {
    if(isSafe(rowIdx + 1, elIdx) && !finalIsInRow(data[rowIdx])) {
      return rowIdx = rowIdx += 1;
    }
    return goRight();
  };
  const goRight = () => {
    if(!isSafe(rowIdx, elIdx + 1)) {
      return false;
    }
    return elIdx = elIdx += 1;
  };
  const findPath = () => {
    if (data[rowIdx][elIdx] === 'F') {
      return `F founded at Row: ${rowIdx} - position: ${elIdx}`;
    }
    return !goDown() ? 'No more moves' : findPath();
  };
  return findPath();
};

export default safePath;
