/*
Problem: Find the best profit time to buy-sell a stock of apples.
The value of each element in the array represents the price and the index represents the time.
*/
const stock_prices = [10, 7, 5, 8, 11, 9, 12, 16, 4, 2, 3];

function appleStock() {
    let stock_prices_cloned = [...stock_prices];
    while(stock_prices_cloned.length) {
        let getMinPrice = Math.min(...stock_prices_cloned);
        let getMaxPrice = Math.max(...stock_prices_cloned);
        let getMinPriceIndex = stock_prices_cloned.indexOf(getMinPrice);
        let getMaxPriceIndex = stock_prices_cloned.indexOf(Math.max(...stock_prices_cloned));

        if(getMinPriceIndex < getMaxPriceIndex) {
            return getMaxPrice - getMinPrice;
        } else {
            stock_prices_cloned = stock_prices_cloned.filter(prices => prices !== getMinPrice);
        }
    }
}

export default appleStock;