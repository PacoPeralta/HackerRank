/*
Problem: Find the best profit time to buy-sell a stock of apples.
The value of each element in the array represents the price and the index represents the time.
*/
// const stock_prices = [10, 7, 5, 8, 11, 9, 12, 16, 4, 2, 3];
const stock_prices = [10, 7, 5, 8, 11, 9, 12, 16, 4, 2, 3];

function appleStock(input = stock_prices) {
    // Clone the original array for immutability.
    let cloned_stock_prices = [...input];

    let profit_balance = [];
    while (cloned_stock_prices.length > 1) {
        let balance = {
            buyTime: 0,
            sellTime: 0,
            profit: 0
        };
        balance.buyTime = cloned_stock_prices.shift();
        balance.sellTime = Math.max(...cloned_stock_prices);
        balance.profit = balance.sellTime - balance.buyTime;
        profit_balance.push(balance);
    }
    return profit_balance.reduce((prev, current) => (prev.profit > current.profit) ? prev : current);
}

export default appleStock;