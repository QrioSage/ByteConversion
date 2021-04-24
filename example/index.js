const btc = require('../lib');

console.log(btc.format(1048576)); // returns 1 MB
console.log(btc.convert(1, 'MB', 'Bytes')); // returns 1048576
console.log(btc.convert(1048576000, 'Bytes', 'MB')); // returns 1000
