var net = require('net');
var server = net.createServer();
server.on("connection",function(connection) {
    console.log('client connected');
    connection.on('end', function() {
        console.log('客户端关闭连接');
    });
    server.getConnections((err,count) => {
        console.log(count+"个链接");
    });
    connection.write('Hello World!\r\n');
    connection.on('data',function(data){
        console.log(data.toString());
    });
   // connection.pipe(connection);
});

server.listen(8080, function() {
    console.log('server is listening');
});
