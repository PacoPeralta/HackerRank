import appleStock from "../appleStock";

// Output shape: {"buyTime": 8, "profit": -1, "sellTime": 7}
// Default input: [10, 7, 5, 8, 11, 9, 12, 16, 4, 2, 3]

test('should return the default result', function () {
    expect(appleStock()).toEqual({
        buyTime: 5,
        profit: 11,
        sellTime: 16
    });
});

test('should return result for negative values', function () {
    const negativeValues = [-7, -5, -3, -14, -2];
    expect(appleStock(negativeValues)).toEqual({
        buyTime: -14,
        profit: 12,
        sellTime: -2
    });
});

test('should return the minimal lost', function () {
    const negativeValues = [25, 18, 12, 10, 4, 3];
    expect(appleStock(negativeValues)).toEqual({
        buyTime: 4,
        profit: -1,
        sellTime: 3
    });
});

test('profit should be same as sellTime - buyTime', function () {
    const {buyTime, profit, sellTime} = appleStock();
    expect(profit).toEqual(sellTime - buyTime);
});
