const express = require('express');
const path = require('path');
const socket = require('socket.io')

const app = express();

let toDoList = []



app.use(express.static(path.join(__dirname, '/client/')))

app.get('*',(req, res) =>{
    res.sendFile(path.join(__dirname, '/client/websocket-todo-app/src/index.js'));
})

const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port 8000');
});
const io = socket(server)

io.on('connection', (socket) => {

    console.log('New client! Its id – ' + socket.id);
    
    socket.on('message', (message) => { 
        console.log('Oh, I\'ve got something from ' + socket.id);
        toDoList= message;
        console.log(toDoList)
        console.log('jest')
        socket.broadcast.emit('message',message)
      });
})

app.use((req, res) => {
    res.status(404).send({ message: 'Not found...' });
})
  