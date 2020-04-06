const data = [2, 3, 4, -1, 1];

function getSmallestMissing() {
    const maxInt = Math.max(...data);
    let minNumb = 1;

    function lookForMissing() {
        if (minNumb === maxInt) {
            return "There are not missing numbers";
        }
        if (!data.filter(el => el === minNumb).length) {
            return `The smallest missing is: ${minNumb}`;
        }
        minNumb = minNumb += 1;
        return lookForMissing();
    }

    return lookForMissing();
}

export default getSmallestMissing;
