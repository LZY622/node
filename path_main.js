var path = require("path");
var fileName = "/new/index.html";
console.log(path.basename(fileName));
console.log(path.dirname(fileName));
console.log(path.extname(fileName));
console.log(path.parse(fileName));
console.log(path.format(path.parse(fileName)));
