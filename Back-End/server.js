const express = require('express');
const Data = require('./Data/data');
const app = express();

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3300;

app.get('/', (req, res) => {
    res.send('You are at mern stack chat app created by Rohit Bisht');
})

app.get('/api/chats', (req, res) => {
    console.log(Data);
    res.send(Data);
})

app.get('/api/chats/:id', (req, res) => {
    const { id } = req.params;
    const data = Data.find((chat) => chat._id === id); 
    console.log(data);
    res.send(data)
})

const start = async() => {

    app.listen(PORT, ()=>{
    console.log(`Running at port ${PORT}`);
    })
}

start();