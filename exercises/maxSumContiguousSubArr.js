const input = [34, -50, 42, 14, -5, 86];
let maxSumResult = {
  maxSumArr: null,
  maxSum: 0
};

const getMaxSum = () => {
  if(!input.length) {
    return maxSumResult;
  }
  const currentSum = input.reduce((a,b) => (a + b));
  if (currentSum > maxSumResult.maxSum) {
    maxSumResult.maxSumArr = [...input];
    maxSumResult.maxSum = currentSum;
  }
  input.shift();
  return getMaxSum();
};

export default getMaxSum;
