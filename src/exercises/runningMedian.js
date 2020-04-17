const input = [2, 1, 4, 7, 2, 0, 5];

export default function runningMedian() {
    let splitEnd = 1;
    let result = [];
    function getTheMedian() {
        const sortedArr = input.slice(0, splitEnd).sort(
            (firstNumb,compareNumb) => (firstNumb - compareNumb)
            );
        const sortedLength = sortedArr.length;
        const isOddNumber = sortedLength % 2;
        if (splitEnd > input.length) {
            return result;
        }
        if (isOddNumber) {
            result.push(sortedArr[Math.floor(sortedLength / 2)]);
            splitEnd = splitEnd += 1;
            return getTheMedian();
        }
        const floorIndex = Math.floor((sortedLength - 1) / 2);
        const upIndex = ((sortedLength - 1) / 2).toFixed(0);
        result.push(((sortedArr[floorIndex] + sortedArr[upIndex]) / 2));
        splitEnd = splitEnd += 1;
        return getTheMedian();
    }
    return getTheMedian();
}