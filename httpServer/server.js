//引入http模块
var http = require('http');
var fs = require("fs");
var path = require("path");
var mime = require("mime");
var config = require("./lib/config");
var cache = {};
//发送404页面
function send404Page(res){
    res.writeHead(404,{'content-type':'text/html;charset=utf8'});

    res.end("<h1>您访问的页面不存在</h1>");
}
//发送403页面
function send403Page(res){
    res.writeHead(403,{'content-type':'text/html;charset=utf8'});

    res.end("<h1>您无权访问服务器目录</h1>");
}
//获取URL并且解析
function getUrl(req,res){
    var filename = __dirname + "/public" + req.url;

    if(!path.extname(req.url) && filename.charAt(filename.length-1)!= "/"){
        filename = filename+'/';
    }
    if(filename.charAt(filename.length-1)== "/"){
        for(var i in config.index){
            if(fs.existsSync(filename+config.index[i])){
                filename = filename + config.index[i];
            }
        }
    }
    fileExists(res,filename);
}
//判断文件是否存在
function fileExists(res,filename){
    if(filename.charAt(filename.length-1)== "/"){
        send403Page(res);
    }else{
        fs.exists(filename,function(exists){
            if(exists){
                readFile(filename,res);
            }else{
                send404Page(res);
            }
        })
    }
}
//读取文件内容
function readFile(filename,res){
   // if(cache[filename]){
     //   sendContent(res,cache[filename],filename);
    //}else{
        fs.readFile(filename,function (err,data) {
            if(err){
                send404Page(res);
            }else{
                cache[filename] = data;
                sendContent(res,data,filename);
            }
        });
    //}
}
//发送网页内容
function sendContent(res,filecon,filename){
    //响应头信息
    res.writeHead(200,{'Content-Type':mime.getType(filename)+';charset=utf8'});
    //结束服务器（发送数据并且断开连接）
    res.end(filecon);
}

//创建http服务并监听8090端口
http.createServer(getUrl).listen(8090);
console.log("this is working on http://localhost:8090");

