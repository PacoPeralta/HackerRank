const data = [0, 1, 6, 8, 0];

function moveZeroes() {
    let lastIteration = data.length -1;
    let index = 0;
    function moveZero() {
        debugger;
        if(index === lastIteration) {
            return data;
        }
        if (data[index] === 0) {
            data.splice(index, 1);
            data.push(0);
            index = 0;
            lastIteration = lastIteration - 1;
            return moveZero();
        }
        index = index + 1;
        return moveZero();
    }
    return moveZero();
}

export default moveZeroes;
