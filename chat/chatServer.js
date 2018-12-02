var net = require('net');
var server = net.createServer();
//声明一个存储socket对象的数组
var connectionCount = new Array();
//声明对应每一个socket对象的唯一标识
var connectionId = null;
//触发connection事件时（生成socket对象时）执行
server.on('connection',function(connection){
    console.log('client connected');
    //接受数据时触发，判断携带的标记，如果是connectionIdInit，那就是初始化唯一标识，如果是其他的就是 直接将标记拼接内容广播出去
    connection.on('data',function(data){
        var data_arr = data.toString().split('@');
        if(data_arr[1]=="connectionIdInit"){
            connectionId = data_arr[0];
            //将唯一标识作为键名，存储在socket数组中
            connectionCount[connectionId]=connection;
        }else{
            console.log(data_arr[1]+"客户端发的消息：" + data_arr[0]);
	    for (var i in connectionCount) {
		 if(connectionCount[i]){
                     connectionCount[i].write(data_arr[1]+"刚发的消息：" + data_arr[0]);
}
            }
        }
    });
    connection.on('end', function() {
        for(var i in connectionCount){
            if(connectionCount[i]==connection){
                //删除这个结束的socket
                connectionCount[i]=undefined;
                var j = i;
                console.log(j+"这个客户端已经关闭");
                break;
            }
        }
        //广播这个断开链接的socket的唯一标示
        for(var i in connectionCount){
            if(i != j){
                connectionCount[i].write(j+"这个客户端已经关闭");
            }
        }
    });
});
server.listen(8080, function() {
    console.log('server is listening');
});
