const input = [2, 3, 4, 1, 5];

function swapArray() {
    let swapNumber = 0;
    for (let i = 0; i < input.length; i += 1) {
        const targetNumber = i + 1;
        if (input[i] !== targetNumber) {
            const currentValue = input[i];
            const getRightIndex = input.indexOf(targetNumber);
            input[i] = targetNumber;
            input[getRightIndex] = currentValue;
            swapNumber = swapNumber += 1;
        }
    }
    return swapNumber;
}

export default swapArray;
