//服务器及页面响应部分
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server); //引入socket.io模块并绑定到服务器

    users=[];
    app.use('/',express.static(__dirname +'/www'));

server.listen(3000);
console.log('server started');

//socket部分
io.on('connection', function(socket) {
    //昵称设置
    // socket.on('login', function(nickname) {
    //     if (users.indexOf(nickname) > -1) {
    //         socket.emit('nickExisted');
    //     } else {
    //         socket.userIndex = users.length;
    //         socket.nickname = nickname;
    //         users.push(nickname);
    //         socket.emit('loginSuccess');
    //         io.sockets.emit('system', nickname); //向所有连接到服务器的客户端发送当前登陆用户的昵称 
    //     };
    // });
    socket.on('foo', function (data) {
    console.log(data);
    })
});

