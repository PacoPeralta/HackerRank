const str = 'asddfgghjasddfgjhgasdda';

export default function longestNoRep() {
  const arr = str.split('');
  let longestSubStr = 0;
  const alreadyReviewed = [];

  function filter(char) {
    const getArr = arr.filter((el) => (char !== el));
    const getArrLength = getArr.length;
    if (longestSubStr < getArrLength) {
      longestSubStr = getArrLength;
    }
    alreadyReviewed.push(char);
    return longestSubStr;
  }

  for(const char of arr) {
    if(!alreadyReviewed.includes(char)) {
      filter(char);
    }
  }

  return longestSubStr;
}
