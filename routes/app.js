var express =require('express');
var bodyParser = require('body-parser');
var app =express();
app.use(bodyParser.json());

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/",function(req,res){
   res.sendFile(__dirname+'/index.html')
})

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        //socket.broadcast.emit('chat message', msg);   to send only client
        io.emit('chat message', msg)     // to send client and sender
    });
  });
app.post("/form",function(req,res){
    console.log("ewc")
    var a =req.body
    res.status(200).send(a)
})



let listener = http.listen(4000 ,function(){
    console.log("Server Started on port ", listener.address().port )
})