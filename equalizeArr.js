var arr = [3,3,2,1,3];
// Problem: Equalize the Array
function equalizeArr(arr) {
    let searchValues = [...new Set(arr)];
    let removeElements = [];
    let numElRemoved = [];
    for(let value of searchValues) {
        let eachValue = arr.filter(val => val === value);
        removeElements.push(eachValue.length);
    };
    let reduceElements = removeElements.reduce(
            (lastVal, currentVal) => { return lastVal + currentVal}
        );
    for(let index = 0; index < removeElements.length; index += 1) {
        numElRemoved.push(reduceElements - removeElements[index]);
    }
    console.log(Math.min(...numElRemoved));
};

console.time('equalizeArr');
equalizeArr(arr);
console.timeEnd('equalizeArr');