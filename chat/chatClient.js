var net = require('net');
var port = process.argv[2];
var host = process.argv[3];
//获取唯一标识
var connectionId = process.argv[4].toString();
//生成一个socket对象
var client = net.connect({port: port,host:host});
client.on('connect', function() {
    console.log('连接到服务器！');
    //发送唯一标示到服务器进行存储
    client.write(connectionId+"@connectionIdInit");
    //标准输入流
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
            //输出流是本socket，发送的数据携带唯一标识作为标记
            client.write(chunk+"@"+connectionId);
            //恢复标准输入流（防止暂停）
            process.stdin.resume();
        }
    });
});
client.on('data', function(data) {
    console.log(data.toString());
});
client.on('end', function() {
    console.log(connectionId+"已经断开退出");
});
