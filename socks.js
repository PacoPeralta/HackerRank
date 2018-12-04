var socks = [10, 10, 30, 50, 10, 10, 20, 20, 10, 10, 30, 50, 10, 8];
// Problem: Sock Merchant
function getSockPairs(socks) {
  let sameSockType = [...new Set(socks)];
  let totalSockPairs = 0;
  for(let index = 0; index < sameSockType.length; index += 1) {
      let socksPairs = socks.filter(sock => sock === sameSockType[index]);
      totalSockPairs = Math.floor(totalSockPairs + socksPairs.length / 2);
  }
  console.log(totalSockPairs);
};

console.time('socks');
getSockPairs(socks);
console.timeEnd('socks');