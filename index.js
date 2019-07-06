const nodeTest = require('./build/Release/nodetest.node');
console.log('addon', nodeTest);

const classInstance = new nodeTest.UtilityWrapper();
console.log('Factorial: ', classInstance.factorial(5));
module.exports = nodeTest;