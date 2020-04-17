const input = [2, 3, 4, 1, 5];

function swapArray() {
    let swapNumber = 0;
    let targetNumber = Math.min(...input);
    for (let i = 0; i < input.length; i += 1) {
        if (input[i] !== targetNumber) {
            const currentValue = input[i];
            const getRightIndex = input.indexOf(targetNumber);
            input[i] = targetNumber;
            input[getRightIndex] = currentValue;
            swapNumber = swapNumber += 1;
        }
        targetNumber = targetNumber += 1;
    }
    return swapNumber;
}

export default swapArray;
