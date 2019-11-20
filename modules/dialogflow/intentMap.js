const greetIntent = require('./intent/greetIntent');
const constIntent = require('./intent/costIntent');

let intentMap = new Map();
intentMap.set('GreetIntent', greetIntent);    
intentMap.set('CostIntent', constIntent);

module.exports = intentMap;