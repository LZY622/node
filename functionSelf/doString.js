var stringSelf = require('./string');

console.log("该字符串长度："+stringSelf.stringLength("nihao"));
console.log("该字符串反写："+stringSelf.stringFan("nihao_"));
console.log(stringSelf.stringSplit('.',"nihao.asd.asd.sad"));
console.log("合并字符串："+stringSelf.stringJoin('@',['as',' wq','ergt','sad']));
console.log("该字符串是否都为数字："+stringSelf.stringIsNum("123123123"));
console.log("是否包含字符串，包含几个："+stringSelf.stringCon("sd","nsiasdhaohaonainini"));
console.log("转化为英文数字表达式："+stringSelf.stringDollar('123954.546'));

