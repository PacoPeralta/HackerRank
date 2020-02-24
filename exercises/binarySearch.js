export default function binarySearch() {
  const arr = [-14, -7, -1, 2, 3, 4, 5, 6, 7 , 8, 45, 76];
  let splitedArr = [...arr];

  function getMiddle(arr) {
    return Math.floor(arr.length / 2);
  }

  function sliceArr(arr, initial, final) {
    return arr.slice(initial, final);
  }

  function getElement(target) {
    let middleIndex = getMiddle(splitedArr);
    let middleElement = splitedArr[middleIndex];
    if(target !== middleElement) {
      if(target < middleElement) {
        splitedArr = sliceArr(splitedArr, 0, middleIndex);
      } else {
        splitedArr = sliceArr(splitedArr, middleIndex, splitedArr.length);
      }
      return getElement(target);
    } else {
      return `The target index is: ${middleIndex}`;
    }
  }


  return getElement(-7);
}




