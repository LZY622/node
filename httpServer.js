//引入http模块
var http = require('http');
//创建http服务
var server = http.createServer(function(req,res){
    //响应头信息
    res.writeHead(200,{'Content-Type':'text/html'});
    //写入文件(只发送数据)
    res.write('<h1>liziyue handsome</h1>');
    //结束服务器（发送数据并且断开连接）
    res.end('hello world liziyue');
})
//监听的端口
server.listen(8090);
console.log("this is working on http://localhost:8090");

