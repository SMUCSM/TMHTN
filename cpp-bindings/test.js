// hello.js
var addon = require('./build/Release/addon');
console.log(addon.hello('world'));  // 'hello world'

console.log('Square 5: '+addon.square(5));
