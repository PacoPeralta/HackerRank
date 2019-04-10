/*
Find the most repeated array value
*/
const find_repeated = [1,2,2,2,2,2,2,3,3,4,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6,7,7,7,7,8,8,9,9,9,9,9,9,0,0,0,0,0,0,0,0];

function mostRepeated() {
    let repeatedArray = [...find_repeated];
    let mostRepeated = 0;
    let repeatedTimes = 0;
    while(repeatedArray.length) {
        let element = repeatedArray.shift();
        let filteredArr = repeatedArray.filter(numb => numb === element);

        if(repeatedTimes < filteredArr.length) {
            mostRepeated = element;
            repeatedTimes = filteredArr.length;
        }
        repeatedArray = repeatedArray.filter(numb => numb !== element);
    }
    return `The most repeated number is ${mostRepeated}, repeated ${repeatedTimes + 1} times`;
}

export default mostRepeated;