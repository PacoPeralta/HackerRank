    const data = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    function getClock() {
        const lastColumnIdx = data[0].length;
        const lastRowIdx = data.length;
        let clock = [];
        let rowIndex = 0;
        let elIndex = 0;
        let allSums;
        function getClockEdgeValues(rowIndex, elIndex) {
            const lastEl = elIndex + 3;
            for(let i = elIndex; i  < lastEl; i += 1) {
                clock.push(data[rowIndex][i]);
            }
        }

        function getClockValues() {
            const clockBottom = rowIndex + 2;
            if((rowIndex + 2) >= lastRowIdx) {
                return allSums;
            }
            if((elIndex + 2) >= lastColumnIdx) {
                rowIndex = rowIndex += 1;
                elIndex = 0;
                return getClockValues();
            }
            getClockEdgeValues(rowIndex, elIndex);
            clock.push(data[rowIndex + 1][elIndex + 1]);
            getClockEdgeValues(clockBottom, elIndex);
            if (typeof allSums === 'undefined' || (clock.reduce((a,b) => (a + b)) > allSums)) {
                allSums = clock.reduce((a,b) => (a + b));
            }
            elIndex = elIndex += 1;
            clock.length = 0;
            return getClockValues();
        }
        return getClockValues();
    }

export default getClock;
